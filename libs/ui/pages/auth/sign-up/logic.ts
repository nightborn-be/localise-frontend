import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { ISignUpFormik, SignUpLogicType } from './types';
import { useRouter } from 'next/router';
import schema from './validation';
import { toCreateUserDTO } from './mappers';
import { useCreateUser } from '../../../../gateways/resource-api/users/users'
import { useToast } from "@chakra-ui/react";
import MakeToast from '../../../components/validation/toast';
import { ToastStatus } from '../../../components/validation/toast/types';
import { AxiosError } from 'axios'
export const useSignUpLogic = (): SignUpLogicType => {
    // Attributes
    const { push } = useRouter();
    const toast = useToast()
    const { mutateAsync: createUser } = useCreateUser();

    // Formik
    const { values, dirty, setFieldError, ...rest } = useFormik<ISignUpFormik>({
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
    function capitalizeFirstLetter(message: string) {
        return message.charAt(0).toUpperCase() + message.slice(1)
    }
    async function handleOnSubmit() {
        const createUserDTO = toCreateUserDTO(values.email, values.password)
        try {
            await createUser({ data: createUserDTO });
            push('/auth/sign-up/organization')
        } catch (err) {
            if (err instanceof AxiosError) {
                MakeToast({
                    title: "Something went wrong",
                    description: capitalizeFirstLetter(err.response?.data),
                    status: ToastStatus.ERROR,
                    toast: toast,
                })
            }
        }
    }
    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
