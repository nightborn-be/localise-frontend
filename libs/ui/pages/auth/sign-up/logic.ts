import { useEffect } from "react"
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { ISignUpFormik, SignUpLogicType } from './types';
import { useRouter } from 'next/router';
import schema from './validation';
import { toCreateUserDTO } from './mappers';
import { useCreateUser } from '../../../../gateways/resource-api/users/users'
import { useToast } from "@chakra-ui/react";
export const useSignUpLogic = (): SignUpLogicType => {
    // Attributes
    const { push } = useRouter();
    const toast = useToast()
    const { mutateAsync: createUser, isError, error: any } = useCreateUser();

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
    if (isError) {

    }
    // Functions
    async function handleOnSubmit() {
        const createUserDTO = toCreateUserDTO(values.email, values.password)
        try {
            await createUser({ data: createUserDTO });
            push('/auth/sign-up/organization')
        } catch (err) {
            throw err
        }
    }
    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
