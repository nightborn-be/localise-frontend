import { useEffect, useState } from 'react';
import { SearchBarOption } from '../inputs/searchbar/props';
import { SidebarLogicType } from './types';
import { IDefaultForm, IForm } from 'utils/formik';
import { ToastType } from 'ui/components/progress-validation/toast/types';
import { useTranslation } from 'react-i18next';
import useToast from 'ui/components/progress-validation/toast';
import { useRouter } from 'next/router';
import { useDisclosure } from '@chakra-ui/react';
import { OrganisationDTO, ProjectDTO } from 'gateways/resource-api/types';
import { useCreateProject, useGetProjects } from 'gateways/resource-api/projects/projects';
import { useCreateOrganisation, useGetOrganisation, useGetOrganisationsForUser, useSwitchUserOrganisation } from 'gateways/resource-api/organisations/organisations';
import { useGetMe } from 'gateways/resource-api/users/users';
import { ICreateProjectForm } from './create-project-modal/types';
import { toCreateProjectDTO } from './create-project-modal/mappers';
import { ICreateOrganisationForm } from './create-organisation-modal/types';
import { toCreateOrganisationDTO } from './create-organisation-modal/mappers';
import { tKeys } from '../../../i18n/keys';
export const useSidebarLogic = (): SidebarLogicType => {
    // Attributes
    const [activeOptionKey, setActiveOptionKey] = useState<string>('');
    const [isOrganisationClicked, setIsOrganisationClicked] =
        useState<boolean>(false);
    const [filterProjectValue, setFilterProjectValue] = useState<string>('');
    const [activeProject, setActiveProject] = useState<ProjectDTO>({});
    const [isDisableOnCloseProjectModal, setIsDisableOnCloseProjectModal] = useState<boolean>(false)
    const createProjectModalDisclosure = useDisclosure();

    const { t } = useTranslation();
    const toast = useToast();
    const { asPath, push } = useRouter();
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
        if (asPath != '/dashboard/settings' && isOrganisationProjectDataFetched) {
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
    }, [organisationProjectData])

    // Functions
    function handleOnOptionClick(value: string) {
        setActiveOptionKey(value);
    }

    const options: SearchBarOption<string>[] = organisationProjectData?.data
        ? organisationProjectData?.data?.map((project) => ({
              label: project.name as string,
              value: project.id as string,
          }))
        : [];

    function handleToggleIsOrganisationClicked() {
        setIsOrganisationClicked((prev) => !prev);
    }
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
        handleToggleIsOrganisationClicked,
        handleOnOptionClick,
        isOrganisationClicked,
        setIsOrganisationClicked,
        options,
        activeOptionKey,
        setActiveOptionKey,
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
