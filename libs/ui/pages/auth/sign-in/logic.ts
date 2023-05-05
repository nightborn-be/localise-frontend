import { useRouter } from 'next/router';
import { ISignInFormik, SignInLogicType } from './types';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { useTranslation } from 'react-i18next';
import validationSchema from './validations';
import { useAuth } from '../../../auth/index';
import { tKeys } from '../../../../i18n/keys';
import { ISignInPageLogicProps } from './props';
import { useState } from 'react';

export const useSignInLogic = ({
    redirectUrl,
}: ISignInPageLogicProps): SignInLogicType => {
    // Attributes
    const { push } = useRouter();
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
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
        try {
            setIsLoading(true);
            await auth.signIn(values.email, values.password);
            if (redirectUrl) {
                push(redirectUrl);
            } else {
                push('/dashboard');
            }
        } catch (error) {
            setIsLoading(false);
            setFieldError(
                'email',
                t<string>(tKeys.auth.sign_in.form.email.error.wrong),
            );
            setFieldError(
                'password',
                t<string>(tKeys.auth.sign_in.form.password.error.wrong),
            );
        }
    }
    return {
        handleOnSubmit: form?.submitForm,
        isLoading,
        form,
    };
};
