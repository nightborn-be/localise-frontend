import { useState } from 'react';
import { SearchBarOption } from '../inputs/searchbar/props';
import { SearchBarColorOption, SidebarLogicType } from './types';
import { IDefaultForm, IForm } from 'utils/formik';
import { ToastType } from 'ui/components/progress-validation/toast/types';
import { useTranslation } from 'react-i18next';
import useToast from 'ui/components/progress-validation/toast';
import { useRouter } from 'next/router';
import { useDisclosure } from '@chakra-ui/react';
import { OrganisationDTO, ProjectDTO } from 'gateways/resource-api/types';
import {
    useCreateProject,
    useGetProject,
    useGetProjects,
    useUpdateProject,
} from 'gateways/resource-api/projects/projects';
import {
    useCreateOrganisation,
    useGetOrganisation,
    useGetOrganisationsForUser,
    useSwitchUserOrganisation,
} from 'gateways/resource-api/organisations/organisations';
import { useGetMe } from 'gateways/resource-api/users/users';
import { ICreateProjectForm } from './create-project-modal/types';
import { toCreateProjectDTO } from './create-project-modal/mappers';
import { ICreateOrganisationForm } from './create-organisation-modal/types';
import { toCreateOrganisationDTO } from './create-organisation-modal/mappers';
import { tKeys } from '../../../i18n/keys';
import { useGetProjectLanguages } from '../../../gateways/resource-api/languages/languages';
import { toUpdateColorProjectDTO } from './mappers';

export const useSidebarLogic = (): SidebarLogicType => {
    // Attributes
    const [activeOptionKey, setActiveOptionKey] = useState<string>('');
    const [isOrganisationClicked, setIsOrganisationClicked] =
        useState<boolean>(false);
    const [filterProjectValue, setFilterProjectValue] = useState<string>('');
    const [isDisableOnCloseProjectModal, setIsDisableOnCloseProjectModal] =
        useState<boolean>(false);
    const createProjectModalDisclosure = useDisclosure();

    const { t } = useTranslation();
    const toast = useToast();
    const { asPath, push, query } = useRouter();
    const { id } = query;
    // Hooks
    const { mutateAsync: createProject } = useCreateProject();
    const { mutateAsync: updateProject } = useUpdateProject();
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
        isLoading: isLoadingSearchProject,
    } = useGetProjects(
        actualOrganisationUser?.id as string,
        {
            q: filterProjectValue,
        },
        {
            query: {
                onSuccess: (projects) => {
                    const sortProject = projects.data?.sort((a, b) => {
                        const dateA = new Date(a.modifiedAt as string).getTime();
                        const dateB = new Date(b.modifiedAt as string).getTime();
                        return dateB - dateA
                    })


                    const project = sortProject?.at(0);
                    if (filterProjectValue === '' && asPath !== '/dashboard/settings') {
                        if (project !== undefined) {
                            push(`/dashboard/projects/${project.id}`);
                            setIsDisableOnCloseProjectModal(false);
                        } else {
                            push('/dashboard');
                            createProjectModalDisclosure.onOpen();
                            setIsDisableOnCloseProjectModal(true);
                        }
                    }
                },
            },
        },
        );


    const { data: projectData, refetch: refetchProjectData } = useGetProject(
        actualOrganisationUser?.id as string,
        id as string,
    );
    const { data: languages } = useGetProjectLanguages(id as string, {}, { query: { retry: 0 } });

    const options: SearchBarColorOption<string>[] = organisationProjectData?.data
        ? organisationProjectData?.data?.map((project) => ({
              label: project.name as string,
              value: project.id as string,
              iconColor: project.iconColor as string,
          }))
        : [];

    // Functions
    function handleOnOptionClick(value: string) {
        setActiveOptionKey(value);
    }

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
        } catch (e) {}
    }

    function handleOnCreateOrganisation(
        form: IForm<ICreateOrganisationForm> & IDefaultForm,
        resetForm: () => void,
    ) {
        try {
            createOrganisation(
                {
                    data: toCreateOrganisationDTO(
                        form.organisationName.value,
                        form.pictureBinary?.value == undefined
                            ? new ArrayBuffer(0)
                            : form.pictureBinary?.value,
                    ),
                },
                {
                    onSuccess: (organisation) => {
                        handleSwitchOrgansiation(organisation);
                        refetchUserData();
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                        resetForm();
                    },
                    onError: () => {
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
    async function handleSwitchOrgansiation(organisation: OrganisationDTO) {
        await switchUserOrganisation(
            {
                userId: userData?.userId as string,
                data: { organisationId: organisation.id as string },
            },
            {
                onSuccess: () => {
                    refetchUserData();
                    refetchActualUserOrganisation();
                    refecthOrganisationUserData();
                    setIsOrganisationClicked(false);
                },
            },
        );
    }
    function handleOnClickProject(
        option: SearchBarOption<string>,
        clearNewRowTerm?: () => void,
    ) {
        clearNewRowTerm && clearNewRowTerm();
        if (setFilterProjectValue != undefined) {
            setFilterProjectValue('');
        }
        push(`/dashboard/projects/${option.value}`);
    }
    async function handleOnUpdateColorProject(iconColor: string) {
        try {
            await updateProject(
                {
                    data: toUpdateColorProjectDTO(
                        projectData?.name as string,
                        languages,
                        iconColor,
                    ),
                    organisationId: actualOrganisationUser?.id as string,
                    projectId: id as string,
                },
                {
                    onSuccess: async () => {
                        refetchUserData();
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                        refetchOrganisationProjectData();
                        refetchProjectData();
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
        refecthOrganisationUserData,
        refetchActualUserOrganisation,
        refetchOrganisationProjectData,
        refetchUserData,
        createProjectModalDisclosure,
        isDisableOnCloseProjectModal,
        handleOnClickProject,
        isLoadingSearchProject,
        handleOnUpdateColorProject,
    };
};
