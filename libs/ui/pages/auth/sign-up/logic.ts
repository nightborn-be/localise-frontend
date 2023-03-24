import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { ISignUpFormik, SignUpLogicType } from './types';
import { useRouter } from 'next/router';
import schema from './validation';
export const useSignUpLogic = (): SignUpLogicType => {
    // Attributes
    const { push } = useRouter();

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
    async function handleOnSubmit() {
        push('/auth/sign-in/organization');
        return undefined;
    }

    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
