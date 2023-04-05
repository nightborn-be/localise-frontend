import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import languages from '../../../../utils/languages';
import { useCreateProject } from '../../../../gateways/resource-api/projects/projects';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import {
    IOrganisationSettingsForm,
    OrganisationSettingsLogicType,
} from './types';
import { useGetMe } from '../../../../gateways/resource-api/users/users';
import { useGetOrganisation } from '../../../../gateways/resource-api/organisations/organisations';

export const useOrganisationSettingsLogic =
    (): OrganisationSettingsLogicType => {
        // Attributes
        const { t } = useTranslation();
        // Hooks
        const { mutateAsync: createProject } = useCreateProject();
        const { data: userData, refetch: refetchUserData } = useGetMe();
        const {
            data: actualOrganisationUser,
            refetch: refetchActualUserOrganisation,
        } = useGetOrganisation(userData?.organisationId as string);
        // Formik
        const { values, ...rest } = useFormik<IOrganisationSettingsForm>({
            initialValues: {
                organisationName: actualOrganisationUser?.name as string,
                picturePath: actualOrganisationUser?.pictureUrl as string,
            },
            onSubmit: handleOnSubmit,
            validateOnChange: false,
        });
        const form = createForm(values, rest);

        async function handleOnSubmit() {}
        // Functions

        function resetForm() {
            rest.setFieldValue('organisationName', '');
            rest.setFieldValue('picturePath', '');
        }

        return {
            handleOnSubmit,
            form,
        };
    };
