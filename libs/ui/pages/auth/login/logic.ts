import { ILoginFormik, LoginLogicType } from './types';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';

import schema from './validations';

export const useLoginLogic = (): LoginLogicType => {
    // Formik
    const { values, dirty, setFieldError, ...rest } = useFormik<ILoginFormik>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleOnSubmit,
        validationSchema: schema,
    });
    const form = createForm(values, rest);

    // Functions
    function handleOnSubmit(): void {
        return undefined;
    }
    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
