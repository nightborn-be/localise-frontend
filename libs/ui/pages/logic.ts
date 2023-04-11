import { useTranslation } from 'react-i18next';
import { IForm, IDefaultForm } from '../../utils/formik';
import { ICreateOrganisationForm } from '../components/sidebar/create-organisation-modal/types';
import { ICreateProjectForm } from '../components/sidebar/create-project-modal/types';
import {
    useCreateProject,
    useGetProjects,
} from '../../gateways/resource-api/projects/projects';
import { useGetMe } from '../../gateways/resource-api/users/users';
import { toCreateProjectDTO } from '../components/sidebar/create-project-modal/mappers';
import { toCreateOrganisationDTO } from '../components/sidebar/create-organisation-modal/mappers';
import {
    useCreateOrganisation,
    useDeleteOrganisation,
    useGetOrganisation,
    useGetOrganisationsForUser,
    useSwitchUserOrganisation,
    useUpdateOrganisation,
} from '../../gateways/resource-api/organisations/organisations';
import useToast from '../../ui/components/progress-validation/toast';
import { ToastType } from '../components/progress-validation/toast/types';
import { IOrganisationSettingsForm } from './components/organisation-settings/types';
import { tKeys } from 'i18n/keys';
import { OrganisationDTO } from 'gateways/resource-api/types';
import { useState } from 'react';

export const useHomeLogic = () => {
    // Attributes
    const toast = useToast();
    const { t } = useTranslation();
    const [filterProjectValue, setFilterProjectValue] = useState<string>('');
    // Hooks
    const { mutateAsync: createProject } = useCreateProject();
    const { mutateAsync: createOrganisation } = useCreateOrganisation();
    const { mutateAsync: deleteOrganisation } = useDeleteOrganisation();
    const { mutateAsync: updateOrganisation, isLoading: isLoadingUpdateOrganisation } =
        useUpdateOrganisation();
    const { mutateAsync: switchUserOrganisation } = useSwitchUserOrganisation();
    const { data: userData, refetch: refetchUserData } = useGetMe();
    const {
        data: actualOrganisationUser,
        refetch: refetchActualUserOrganisation,
    } = useGetOrganisation(userData?.organisationId as string);
    const { data: organisationUserData, refetch: refecthOrganisationUserData } =
        useGetOrganisationsForUser(userData?.userId as string);

    const {
        data: organisationProjectData,
        refetch: refetchOrganisationProjectData,
    } = useGetProjects(actualOrganisationUser?.id as string, {
        q: filterProjectValue,
    });

    async function handleOnCreateProject(
        form: IForm<ICreateProjectForm> & IDefaultForm,
        resetForm: () => void,
    ) {
        try {
            await createProject(
                {
                    data: toCreateProjectDTO(
                        form.projectName.value,
                        form.sourceLanguage.value,
                        form.targetLanguages.value,
                    ),
                    organisationId: actualOrganisationUser?.id as string,
                },
                {
                    onSuccess: async () => {
                        refetchUserData();
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                        refetchOrganisationProjectData();
                        resetForm();
                    },
                    onError: async () => {
                        toast({
                            type: ToastType.ERROR,
                            title: t(
                                tKeys.home.modal.create_project.form
                                    .project_name.form.error,
                            ),
                            delay: 5000,
                        });
                    },
                },
            );
        } catch (e) { }
    }

    async function handleOnCreateOrganisation(
        form: IForm<ICreateOrganisationForm> & IDefaultForm,
        resetForm: () => void,
    ) {
        try {
            await createOrganisation(
                {
                    data: toCreateOrganisationDTO(
                        form.organisationName.value,
                        form.pictureBinary?.value,
                    ),
                },
                {
                    onSuccess: async () => {
                        refetchUserData();
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                        resetForm();
                    },
                    onError: async () => {
                        toast({
                            type: ToastType.ERROR,
                            title: t<string>(
                                tKeys.home.modal.create_organisation.form.error,
                            ),
                        });
                    },
                },
            );
        } catch (err) { }
    }
    async function handleOnDeleteOrganisation() {
        try {
            await deleteOrganisation(
                {
                    organisationId: actualOrganisationUser?.id as string,
                },
                {
                    onError: () => {
                        toast({
                            type: ToastType.ERROR,
                            title: t<string>(
                                tKeys.home.organisation_settings.error.delete,
                            ),
                            delay: 4000,
                        });
                    },
                    onSuccess: () => {
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                    },
                },
            );
        } catch (e) {
            toast({
                type: ToastType.ERROR,
                title: t<string>(tKeys.home.organisation_settings.error.delete),
                delay: 4000,
            });
        }
    }

    async function handleUpdateOrganisation(form: IForm<IOrganisationSettingsForm> & IDefaultForm) {
        try {
            await updateOrganisation(
                {
                    organisationId: actualOrganisationUser?.id as string,
                    data: {
                        name: form.organisationName.value,
                        pictureContent: Buffer.from(
                            form.organisationPicture?.value as ArrayBuffer,
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

    function handleSwitchOrgansiation(organisation: OrganisationDTO, setIsOrganisationClicked: (value: boolean) => void) {
        switchUserOrganisation(
            {
                userId: userData?.userId as string,
                data: { organisationId: organisation.id as string },
            },
            {
                onSuccess: () => {
                    refetchUserData();
                    setIsOrganisationClicked(false);
                },
            },
        );
    }


    return {
        handleOnCreateProject,
        handleOnCreateOrganisation,
        handleOnDeleteOrganisation,
        handleUpdateOrganisation,
        actualOrganisationUser,
        isLoadingUpdateOrganisation,
        handleSwitchOrgansiation,
        organisationProjectData,
        organisationUserData,
        filterProjectValue,
        setFilterProjectValue,
    };
};
