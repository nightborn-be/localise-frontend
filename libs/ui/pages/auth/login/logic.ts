import { ILoginFormik, LoginLogicType } from './types';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
export const useLoginLogic = (): LoginLogicType => {
    // Formik
    const schema = Yup.object({
        email: Yup.string().email().required('Email is requried'),
        password: Yup.string().required('Passowrd is requried'),
    });
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
    async function handleOnSubmit(): Promise<void> { return undefined };

    return {
        handleOnSubmit,
        form,
    }

}