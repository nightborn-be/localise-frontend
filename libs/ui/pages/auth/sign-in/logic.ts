import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { ISignInFormik, SignInLogicType } from './types';
import { useRouter } from 'next/router';

export const useSignInLogic = (): SignInLogicType => {
    // Attributes
    const { push } = useRouter();

    // Formik
    const schema = Yup.object({
        email: Yup.string().email().required('Email is requried'),
        password: Yup.string().required('Passowrd is requried'),
    });
    const { values, dirty, setFieldError, ...rest } = useFormik<ISignInFormik>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleOnSubmit,
        validationSchema: schema,
    });
    const form = createForm(values, rest);

    // Functions
    async function handleOnSubmit(): Promise<void> { push('/auth/sign-in/organization'); return undefined };

    return {
        handleOnSubmit,
        form,
    }

}