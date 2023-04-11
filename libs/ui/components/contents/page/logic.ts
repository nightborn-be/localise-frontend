import {
    useCreateOrganisation,
    useDeleteOrganisation,
    useGetOrganisation,
    useGetOrganisationsForUser,
    useSwitchUserOrganisation,
} from '../../../../gateways/resource-api/organisations/organisations';
import {
    useCreateProject,
    useGetProjects,
} from '../../../../gateways/resource-api/projects/projects';
import { useGetMe } from '../../../../gateways/resource-api/users/users';
import { tKeys } from '../../../../i18n/keys';
import useToast from '../../progress-validation/toast';
import { ToastType } from '../../progress-validation/toast/types';
import { useTranslation } from 'react-i18next';
import { toCreateOrganisationDTO } from '../../sidebar/create-organisation-modal/mappers';
import { IDefaultForm, IForm } from '../../../../utils/formik';
import { toCreateProjectDTO } from '../../sidebar/create-project-modal/mappers';
import { ICreateProjectForm } from '../../sidebar/create-project-modal/types';
import { ICreateOrganisationForm } from '../../sidebar/create-organisation-modal/types';

export const usePageLogic = () => {
    // Attributes
    const toast = useToast();
    const { t } = useTranslation();
    // Hooks
    const { mutateAsync: createProject } = useCreateProject();
    const { mutateAsync: createOrganisation } = useCreateOrganisation();
    const { mutateAsync: deleteOrganisation } = useDeleteOrganisation();
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
        // q: filterProjectValue,
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
        } catch (e) {}
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
        } catch (err) {}
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

    return { handleOnCreateProject, handleOnCreateOrganisation };
};
