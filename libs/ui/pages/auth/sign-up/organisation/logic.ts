import { IOrganisationForm, OrganisationLogicResponse } from './types';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { createForm } from '../../../../../utils/formik';
import validationSchema from './validation';
import { useTranslation } from 'react-i18next';
import useOnPressKeyEvent from 'utils/pressKeyEvent';

export const useOrganisationLogic = (): OrganisationLogicResponse => {
    // Attributes
    const { push } = useRouter();
    const { t } = useTranslation();
    useOnPressKeyEvent(['Enter', 'NumpadEnter'], handleOnSubmit);
    // Formik
    const { values, ...rest } = useFormik<IOrganisationForm>({
        initialValues: {
            organisationName: '',
        },
        onSubmit: handleOnSubmit,
        validationSchema: validationSchema(t),
        validateOnChange: false,
    });
    const form = createForm(values, rest);

    // Functions
    function handleOnSubmit() {
        push({
            pathname: '/auth/sign-up/organisation/picture',
            query: {
                organisationName: values.organisationName,
            },
        });
    }

    return {
        handleOnSubmit: form?.submitForm,
        form,
    };
};
