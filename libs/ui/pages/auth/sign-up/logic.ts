import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { ISignUpForm, ISignUpLogicResponse } from './types';
import { useRouter } from 'next/router';
import schema from './validation';
import { toCreateUserDTO } from './mappers';
import { useCreateUser } from '../../../../gateways/resource-api/users/users';
import useToast from '../../../components/progress-validation/toast';
import { ToastType } from '../../../components/progress-validation/toast/types';
import { strings } from '../../../../utils/strings';

export const useSignUpLogic = (): ISignUpLogicResponse => {
    // Attributes
    const { push } = useRouter();
    const toast = useToast();

    // Mutations
    const { mutateAsync: createUser } = useCreateUser();

    // Form
    const { values, ...rest } = useFormik<ISignUpForm>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleOnSubmit,
        validationSchema: schema,
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
                title: 'Something went wrong',
                description: strings.capitalize(err.response?.data),
            });
        }
    }

    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
