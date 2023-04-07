import { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import {
    IOrganisationSettingsForm,
    OrganisationSettingsLogicType,
} from './types';
import { useGetMe } from '../../../../gateways/resource-api/users/users';
import {
    useGetOrganisation,
    useGetOrganisationsForUser,
    useUpdateOrganisation,
} from '../../../../gateways/resource-api/organisations/organisations';
import useToast from '../../../components/progress-validation/toast';
import { ToastType } from '../../../components/progress-validation/toast/types';
import { useDisclosure } from '@chakra-ui/react';
import { MenuItemValue } from '../../../components/navigation/sidebar-menu-setting/types';

export const useOrganisationSettingsLogic =
    (): OrganisationSettingsLogicType => {
        // Attributes
        const { t } = useTranslation();
        const toast = useToast();
        const [organisationPicture, setOrganisationPicture] = useState<
            string | ArrayBuffer | null
        >();
        const [picturePath, setPicturePath] = useState<string>('');
        const informationsRef = useRef<HTMLDivElement>(null);
        const membersRef = useRef<HTMLDivElement>(null);
        const deleteOrganisationDisclosure = useDisclosure();
        const addMembersDisclosure = useDisclosure();
        const [activeMenuSettingKey, setActiveMenuSettingKey] = useState(
            MenuItemValue.INFORMATIONS,
        );
        // Hooks
        const { mutateAsync: updateOrganisation, isLoading } =
            useUpdateOrganisation();
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
            setPicturePath(actualOrganisationUser?.pictureUrl as string);
        }, [actualOrganisationUser]);

        const form = createForm(values, rest);
        function onDrag(
            pictureUrl: string,
            binary?: string | ArrayBuffer | null,
        ) {
            setPicturePath(pictureUrl);
            setOrganisationPicture(binary);
        }
        // Functions
        function handleOnSubmit() {
            try {
                updateOrganisation(
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
                                title: t<string>(
                                    tKeys.home.organisation_settings.error.save,
                                ),
                                delay: 4000,
                            });
                        },
                        onSuccess: () => {
                            toast({
                                type: ToastType.SUCCESS,
                                title: t<string>(
                                    tKeys.home.organisation_settings.success
                                        .save,
                                ),
                                delay: 3000,
                            });
                            refetchActualUserOrganisation();
                            refecthOrganisationUserData();
                        },
                    },
                );
            } catch (e) {
                toast({
                    type: ToastType.ERROR,
                    title: t<string>(
                        tKeys.home.organisation_settings.error.save,
                    ),
                    delay: 4000,
                });
            }
        }
        return {
            form,
            handleOnSubmit,
            onDrag,
            actualOrganisationUser,
            picturePath,
            isLoading,
            informationsRef,
            membersRef,
            activeMenuSettingKey,
            setActiveMenuSettingKey,
            deleteOrganisationDisclosure,
            addMembersDisclosure,
        };
    };
