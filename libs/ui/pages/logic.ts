import { useTranslation } from 'react-i18next';
import { IForm, IDefaultForm } from '../../utils/formik';
import { ICreateOrganisationForm } from '../components/sidebar/create-organisation-modal/types';
import { ICreateProjectForm } from '../components/sidebar/create-project-modal/types';
import {
    useCreateProject,
    useDeleteProject,
    useGetProjects,
    useUpdateProject,
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
import {
    OrganisationDTO,
    ProjectDTO,
    TermDTO,
} from 'gateways/resource-api/types';
import { useState } from 'react';
import { tKeys } from '../../i18n/keys';
import {
    useCreateTerm,
    useDeleteTerm,
    useGetTerms,
    useUpdateTerm,
} from '../../gateways/resource-api/terms/terms';
import { useSaveTranslation } from '../../gateways/resource-api/translations/translations';
import { IEditInputForm } from './components/project/components/glossary/components/table-row-term/components/edit-input/types';
import { ITableRowTermForm } from './components/project/components/glossary/components/table-row-term/types';
import { toUpdateTermDTO } from './components/project/components/glossary/components/table-row-term/mappers';
import { HomeContentState } from './types';
import { AxiosError } from 'axios';
import { IUpdateProjectForm } from './components/project/components/settings/types';
import { toUpdateProjectDTO } from './mappers';

export const useHomeLogic = () => {
    // Attributes
    const [currentStatePage, setCurrentStatePage] =
        useState<HomeContentState>();
    const toast = useToast();
    const { t } = useTranslation();
    const [filterProjectValue, setFilterProjectValue] = useState<string>('');
    const [searchFilterValue, setSearchFilterValue] = useState<string>('');
    const [sortValue, setSortValue] = useState<string>('');
    const [isDetectDuplicate, setIsDetectDuplicate] = useState<boolean>(false);
    const [activeProject, setActiveProject] = useState<ProjectDTO>({});
    const [activeTerm, setActiveTerm] = useState<string>('');
    const [newRowTerm, setNewRowTerm] = useState<TermDTO[]>([]);

    // Hooks
    const { mutateAsync: createProject } = useCreateProject();
    const { mutateAsync: updateProject } = useUpdateProject();
    const { mutateAsync: deleteProject } = useDeleteProject();

    const { mutateAsync: createTerm } = useCreateTerm();
    const { mutateAsync: updateTerm } = useUpdateTerm();
    const { mutateAsync: deleteTerm } = useDeleteTerm();
    const { mutateAsync: saveTranslation } = useSaveTranslation();
    const { mutateAsync: createOrganisation } = useCreateOrganisation();
    const { mutateAsync: deleteOrganisation } = useDeleteOrganisation();
    const {
        mutateAsync: updateOrganisation,
        isLoading: isLoadingUpdateOrganisation,
    } = useUpdateOrganisation();
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

    const { data: projectTerms, refetch: refetchProjectTerms } = useGetTerms(
        activeProject.id as string,
        { q: searchFilterValue },
    );

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
    async function handleOnUpdateProject(
        form: IForm<IUpdateProjectForm> & IDefaultForm,
    ) {
        try {
            await updateProject(
                {
                    data: toUpdateProjectDTO(
                        form.projectName.value,
                        form.sourceLanguage.value,
                        form.targetLanguages.value,
                    ),
                    organisationId: actualOrganisationUser?.id as string,
                    projectId: activeProject.id as string,
                },
                {
                    onSuccess: async () => {
                        refetchUserData();
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                        refetchOrganisationProjectData();
                        setActiveProject({
                            ...activeProject,
                            name: form.projectName.value,
                        });
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

    async function handleOnDeleteProject() {
        try {
            await deleteProject(
                {
                    organisationId: actualOrganisationUser?.id as string,
                    projectId: activeProject.id as string,
                },
                {
                    onSuccess: async () => {
                        refetchUserData();
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                        refetchOrganisationProjectData();
                        setActiveProject(
                            organisationProjectData?.data?.at(0) as ProjectDTO,
                        );
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

    async function handleUpdateOrganisation(
        form: IForm<IOrganisationSettingsForm> & IDefaultForm,
    ) {
        try {
            await updateOrganisation(
                {
                    organisationId: actualOrganisationUser?.id as string,

                    data: {
                        name: form.organisationName.value,
                        pictureContent:
                            form.organisationPicture &&
                            Buffer.from(
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
                                tKeys.home.organisation_settings.success.save,
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
                title: t<string>(tKeys.home.organisation_settings.error.save),
                delay: 4000,
            });
        }
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

    async function handleOnDeleteTerm(projectId: string, termId: string) {
        try {
            await deleteTerm(
                { projectId: projectId, termId: termId },
                {
                    onSuccess: () => {
                        refetchProjectTerms();
                    },
                },
            );
        } catch (error) {
            const err = error as AxiosError;
            toast({
                type: ToastType.ERROR,
                title: err.response?.data as string,
                delay: 5000,
            });
        }
    }

    // Need to do when the backend has implemented the missing things
    function handleOnCreateTerm(projectId: string) {
        // const term = createTerm({ projectId: projectId, data: { name: "Insert key", description: "" } })
    }

    async function callCreateTerm(
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) {
        try {
            await createTerm(
                {
                    projectId: form.projectId.value,
                    data: {
                        name: form.key.value,
                        description: form.description.value,
                    },
                },
                {
                    onSuccess: () => {
                        refetchProjectTerms();
                    },
                },
            );
        } catch (error) {
            const err = error as AxiosError;
            toast({
                type: ToastType.ERROR,
                title: err.response?.data as string,
                delay: 5000,
            });
        }
    }
    async function callUpdateTerm(
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) {
        try {
            await updateTerm({
                projectId: form.projectId.value,
                termId: form.termId.value,
                data: toUpdateTermDTO(form.key.value, form.description.value),
            });
        } catch (error) {
            const err = error as AxiosError;
            toast({
                type: ToastType.ERROR,
                title: err.response?.data as string,
                delay: 5000,
            });
        }
    }
    async function callSaveTranslations(
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) {
        for (const translate in form.translations.value) {
            const element = form.translations.value[
                translate
            ] as IEditInputForm;
            try {
                await saveTranslation({
                    termId: element.termId,
                    languageId: element.languageId,
                    data: { translation: element.translation },
                });
            } catch (error) {
                const err = error as AxiosError;
                toast({
                    type: ToastType.ERROR,
                    title: err.response?.data as string,
                    delay: 5000,
                });
            }
        }
    }
    async function handleOnSaveTranslations(
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) {
        if (form.termId.value === undefined) {
            callCreateTerm(form);
        } else {
            callUpdateTerm(form);
            callSaveTranslations(form);
        }
    }

    function clearNewRowTerm() {
        setNewRowTerm([]);
    }
    function addNewRowTerm(term: TermDTO) {
        setNewRowTerm((prev) => [...prev, term]);
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
        projectTerms,
        activeProject,
        setActiveProject,
        handleOnSaveTranslations,
        handleOnCreateTerm,
        handleOnDeleteTerm,
        setSearchFilterValue,
        searchFilterValue,
        sortValue,
        setSortValue,
        isDetectDuplicate,
        setIsDetectDuplicate,
        currentStatePage,
        setCurrentStatePage,
        newRowTerm,
        setNewRowTerm,
        clearNewRowTerm,
        addNewRowTerm,
        handleOnUpdateProject,
        handleOnDeleteProject,
    };
};
