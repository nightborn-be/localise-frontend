import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { ISignUpForm, ISignUpLogicResponse } from './types';
import { useRouter } from 'next/router';
import validationSchema from './validation';
import { toCreateUserDTO } from './mappers';
import { useCreateUser } from '../../../../gateways/resource-api/users/users';
import useToast from '../../../components/progress-validation/toast';
import { ToastType } from '../../../components/progress-validation/toast/types';
import { strings } from '../../../../utils/strings';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import { useAuth } from '../../../auth';
import useOnPressKeyEvent from 'utils/pressKeyEvent';

export const useSignUpLogic = (): ISignUpLogicResponse => {
    // Attributes
    const { push } = useRouter();
    const toast = useToast();
    const { t } = useTranslation();
    const auth = useAuth();
    useOnPressKeyEvent(['Enter', 'NumpadEnter'], handleOnSubmit);
    // Mutations
    const { mutateAsync: createUser, isLoading } = useCreateUser();

    // Form
    const { values, ...rest } = useFormik<ISignUpForm>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleOnSubmit,
        validationSchema: validationSchema(t),
        validateOnChange: false,
    });
    const form = createForm(values, rest);

    // Functions
    async function handleOnSubmit() {
        const createUserDTO = toCreateUserDTO(values.email, values.password);
        try {
            await createUser({ data: createUserDTO });
            auth.signIn(values.email, values.password);
            push('/auth/sign-up/organisation');
        } catch (err: any) {
            toast({
                type: ToastType.ERROR,
                title: t<string>(tKeys.auth.sign_up.error.toast.title),
                description: strings.capitalize(err.response?.data),
                delay: 5000,
            });
        }
    }

    return {
        handleOnSubmit: form?.submitForm,
        isLoading,
        form,
    };
};
