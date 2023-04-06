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
import {
    useDeleteOrganisation,
    useGetOrganisation,
    useGetOrganisationsForUser,
    useUpdateOrganisation,
} from '../../../../gateways/resource-api/organisations/organisations';
import useToast from '../../../components/progress-validation/toast';
import { ToastType } from '../../../components/progress-validation/toast/types';

export const useOrganisationSettingsLogic =
    (): OrganisationSettingsLogicType => {
        // Attributes
        const { t } = useTranslation();
        const toast = useToast();
        const [organisationPicture, setOrganisationPicture] = useState<
            string | ArrayBuffer | null
        >();
        const [pictureUrl, setPictureUrl] = useState<string>('');
        // Hooks
        const { mutateAsync: updateOrganisation } = useUpdateOrganisation();
        const { mutateAsync: deleteOrganisation } = useDeleteOrganisation();
        const { data: userData, refetch: refetchUserData } = useGetMe();
        const {
            data: actualOrganisationUser,
            refetch: refetchActualUserOrganisation,
        } = useGetOrganisation(userData?.organisationId as string);
        const { refetch: refecthOrganisationUserData } =
            useGetOrganisationsForUser(userData?.userId as string);

        // Formik
        const { values, ...rest } = useFormik<IOrganisationSettingsForm>({
            initialValues: {
                organisationName: '',
            },
            onSubmit: handleOnSubmit,
            validateOnChange: false,
        });
        useEffect(() => {
            rest.setFieldValue(
                'organisationName',
                actualOrganisationUser?.name,
            );
            setPictureUrl(actualOrganisationUser?.pictureUrl as string);
        }, [actualOrganisationUser]);

        const form = createForm(values, rest);

        // Functions
        async function handleOnSubmit() {
            try {
                await updateOrganisation(
                    {
                        organisationId: actualOrganisationUser?.id as string,
                        data: {
                            name: form.organisationName.value,
                            pictureContent: Buffer.from(
                                organisationPicture as ArrayBuffer,
                            ).toString('base64'),
                        },
                    },
                    {
                        onError: () => {
                            toast({
                                type: ToastType.ERROR,
                                title: `Sorry we cannot update your organisation`,
                            });
                        },
                        onSuccess: () => {
                            refetchActualUserOrganisation();
                            refecthOrganisationUserData();
                        },
                    },
                );
            } catch (e) {}
        }

        async function handleOnDelete() {
            try {
                await deleteOrganisation(
                    {
                        organisationId: actualOrganisationUser?.id as string,
                    },
                    {
                        onError: () => {
                            toast({
                                type: ToastType.ERROR,
                                title: `Sorry we cannot delete your organisation`,
                            });
                        },
                        onSuccess: () => {
                            refetchActualUserOrganisation();
                            refecthOrganisationUserData();
                        },
                    },
                );
            } catch (e) {}
        }
        function resetForm() {
            rest.setFieldValue('organisationName', '');
            rest.setFieldValue('organisationPicture', '');
        }

        // Function
        function getInitialeName() {
            const arraySplit = actualOrganisationUser?.name?.split(' ');
            let inital = '';
            arraySplit?.map((obj) => {
                inital += obj.charAt(0);
            });
            return inital;
        }
        return {
            form,
            handleOnSubmit,
            handleOnDelete,
            setOrganisationPicture,
            getInitialeName,
            pictureUrl,
        };
    };
