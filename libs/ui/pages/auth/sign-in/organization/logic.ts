import { IOrganizationFormik, OrganizationLogicType } from './types';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { createForm } from '../../../../../utils/formik';
export const useOrganizationLogic = (): OrganizationLogicType => {
    // Attributes
    const { push } = useRouter();

    // Formik
    const schema = Yup.object({
        email: Yup.string().email().required('Email is requried'),
        password: Yup.string().required('Passowrd is requried'),
    });
    const { values, dirty, setFieldError, ...rest } = useFormik<IOrganizationFormik>({
        initialValues: {
            organizationName: '',
        },
        onSubmit: handleOnSubmit,
        validationSchema: schema,
    });
    const form = createForm(values, rest);

    // Functions
    async function handleOnSubmit() { push('/auth/sign-in/organization/picture'); return undefined };

    return {
        handleOnSubmit,
        form,
    }

}