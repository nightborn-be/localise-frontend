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

export const useSignUpLogic = (): ISignUpLogicResponse => {
    // Attributes
    const { push } = useRouter();
    const toast = useToast();
    const { t } = useTranslation();

    // Mutations
    const { mutateAsync: createUser } = useCreateUser();

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
            push('/auth/sign-up/organization');
        } catch (err: any) {
            toast({
                type: ToastType.ERROR,
                title: t<string>(tKeys.auth.sign_up.error.toast.title),
                description: strings.capitalize(err.response?.data),
            });
        }
    }

    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
