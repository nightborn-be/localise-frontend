import { IOrganizationFormik, OrganizationLogicType } from './types';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { createForm } from '../../../../../utils/formik';
import schema from './validation'

export const useOrganizationLogic = (): OrganizationLogicType => {
    // Attributes
    const { push } = useRouter();

    // Formik
    const { values, dirty, setFieldError, ...rest } =
        useFormik<IOrganizationFormik>({
            initialValues: {
                organizationName: '',
            },
            onSubmit: handleOnSubmit,
            validationSchema: schema,
            validateOnChange: false,
        });
    const form = createForm(values, rest);

    // Functions
    async function handleOnSubmit() {
        push('/auth/sign-up/organization/picture');
        return undefined;
    }

    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
