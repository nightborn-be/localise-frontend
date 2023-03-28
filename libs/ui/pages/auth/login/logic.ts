import { useRouter } from 'next/router'
import { ISignInFormik, SignInLogicType } from './types';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { useTranslation } from 'react-i18next';
import validationSchema from './validations';
import { useAuth } from '../../../auth/index'
export const useSignInLogic = (): SignInLogicType => {
    // Attributes
    const { push } = useRouter()
    const { t } = useTranslation();
    const auth = useAuth();

    // Formik
    const { values, ...rest } = useFormik<ISignInFormik>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleOnSubmit,
        validationSchema: validationSchema(t),
        validateOnChange: false,
    });
    const form = createForm(values, rest);
    const { dirty, setFieldError } = rest;
    // Functions
    async function handleOnSubmit(): Promise<void> {
        auth?.signIn(values.email, values.password)
        if (auth?.isLogged) {
            push('/')
        } else {
            setFieldError("email", "Wrong email")
            setFieldError("password", "Wrong password")
        }
        return undefined;
    }
    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
