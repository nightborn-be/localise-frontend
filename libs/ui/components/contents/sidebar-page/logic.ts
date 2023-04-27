import { useEffect, useState } from 'react';
import {
    useCreateProject,
    useGetProjects,
} from '../../../../gateways/resource-api/projects/projects';
import { OrganisationDTO, ProjectDTO } from 'gateways/resource-api/types';
import {
    useCreateOrganisation,
    useGetOrganisation,
    useGetOrganisationsForUser,
    useSwitchUserOrganisation,
} from '../../../../gateways/resource-api/organisations/organisations';
import { useGetMe } from '../../../../gateways/resource-api/users/users';
import { IDefaultForm, IForm } from 'utils/formik';
import { ICreateProjectForm } from '../../../components/sidebar/create-project-modal/types';
import { toCreateProjectDTO } from '../../../components/sidebar/create-project-modal/mappers';
import { ToastType } from 'ui/components/progress-validation/toast/types';
import { tKeys } from '../../../../i18n/keys';
import { useTranslation } from 'react-i18next';
import useToast from 'ui/components/progress-validation/toast';
import { ICreateOrganisationForm } from '../../../components/sidebar/create-organisation-modal/types';
import { toCreateOrganisationDTO } from '../../../components/sidebar/create-organisation-modal/mappers';
import { SidebarPageLogicType } from './types';
import { useRouter } from 'next/router';
import { useDisclosure } from '@chakra-ui/react';
export const useSidebarPageLogic = (): SidebarPageLogicType => {
    // Attributes
    const [filterProjectValue, setFilterProjectValue] = useState<string>('');
    const [activeProject, setActiveProject] = useState<ProjectDTO>({});
    const [isDisableOnCloseProjectModal, setIsDisableOnCloseProjectModal] = useState<boolean>(false)
    const createProjectModalDisclosure = useDisclosure();

    const { t } = useTranslation();
    const toast = useToast();
    const { push } = useRouter();
    // Hooks
    const { mutateAsync: createProject } = useCreateProject();
    const { mutateAsync: createOrganisation } = useCreateOrganisation();
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
        isFetched: isOrganisationProjectDataFetched
    } = useGetProjects(actualOrganisationUser?.id as string, {
        q: filterProjectValue,
    });

    useEffect(() => {
        if (isOrganisationProjectDataFetched) {
            const project = organisationProjectData?.data?.at(0)
            if (project !== undefined) {
                setActiveProject(project)
                push(`/dashboard/projects/${project.id}`)
                setIsDisableOnCloseProjectModal(false)

            } else if (filterProjectValue === '' && project === undefined) {
                push('/dashboard')
                createProjectModalDisclosure.onOpen()
                setIsDisableOnCloseProjectModal(true)
            }
        }
    }
        , [organisationProjectData])

    // Functions
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
    function handleSwitchOrgansiation(
        organisation: OrganisationDTO,
        setIsOrganisationClicked: (value: boolean) => void,
    ) {
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
        handleSwitchOrgansiation,
        actualOrganisationUser,
        organisationUserData,
        organisationProjectData,
        filterProjectValue,
        setFilterProjectValue,
        activeProject,
        setActiveProject,
        refecthOrganisationUserData,
        refetchActualUserOrganisation,
        refetchOrganisationProjectData,
        refetchUserData,
        createProjectModalDisclosure,
        isDisableOnCloseProjectModal,
    };
};
