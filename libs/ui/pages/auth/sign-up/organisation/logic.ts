import { IOrganisationForm, OrganisationLogicResponse } from './types';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { createForm } from '../../../../../utils/formik';
import validationSchema from './validation';
import { useTranslation } from 'react-i18next';

export const useOrganisationLogic = (): OrganisationLogicResponse => {
    // Attributes
    const { push } = useRouter();
    const { t } = useTranslation();

    // Formik
    const { values, ...rest } = useFormik<IOrganisationForm>({
        initialValues: {
            organizationName: '',
        },
        onSubmit: handleOnSubmit,
        validationSchema: validationSchema(t),
        validateOnChange: false,
    });
    const form = createForm(values, rest);

    // Functions
    function handleOnSubmit() {
        push({
            pathname: '/auth/sign-up/organization/picture',
            query: {
                organizationName: values.organizationName,
            },
        });
    }

    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
