import { ISignInFormik, SignInLogicType } from './types';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import schema from './validations';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import validationSchema from './validations';
import { useAuth } from '../../../auth/index'
export const useSignInLogic = (): SignInLogicType => {
    // Attributes
    const { t } = useTranslation();

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
    function handleOnSubmit(): void {
        useAuth
        return undefined;
    }
    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
