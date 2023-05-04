import { useEffect, useState } from 'react';
import { ProjectLogicType } from './types';
import {
    useDeleteProject,
    useUpdateProject,
} from 'gateways/resource-api/projects/projects';
import {
    useCreateTerm,
    useDeleteTerm,
    useGetTerms,
    useUpdateTerm,
} from 'gateways/resource-api/terms/terms';
import { ProjectDTO, TermDTO } from 'gateways/resource-api/types';
import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { IDefaultForm, IForm } from 'utils/formik';
import { useSaveTranslation } from 'gateways/resource-api/translations/translations';
import { toUpdateProjectDTO } from '../../../../pages/mappers';
import { tKeys } from '../../../../../i18n/keys';
import { IProjectContentLogicProps } from './props';
import { IEditInputForm } from '../../../../components/contents/project/glossary/components/table-row-term/components/edit-input/types';
import { ITableRowTermForm } from '../../../../components/contents/project/glossary/components/table-row-term/types';
import { IUpdateProjectForm } from '../../../../components/contents/project/settings/types';
import { toUpdateTermDTO } from '../../../../components/contents/project/glossary/components/table-row-term/mappers';
import { ToastType } from 'ui/components/progress-validation/toast/types';
import useToast from 'ui/components/progress-validation/toast';
import { useRouter } from 'next/router';

export const useProjectLogic = ({
    actualOrganisationUser,
    refecthOrganisationUserData,
    refetchActualUserOrganisation,
    refetchUserData,
    refetchOrganisationProjectData,
    organisationProjectData,
    activeProject,
    setActiveProject,
}: IProjectContentLogicProps): ProjectLogicType => {
    // Attributes
    const toast = useToast();
    const { t } = useTranslation();
    const router = useRouter();
    const { id } = router.query;
    const [activeKey, setActiveKey] = useState<React.Key>();
    const [sortValue, setSortValue] = useState<string>('');
    const [isDetectDuplicate, setIsDetectDuplicate] = useState<boolean>(false);
    const [searchFilterValue, setSearchFilterValue] = useState<string>('');
    const [newRowTerm, setNewRowTerm] = useState<TermDTO[]>([]);
    useEffect(() => {
        setActiveKey(0);
    }, []);

    // Hooks
    const { mutateAsync: updateProject, isLoading: isLoadingUpdateProject } =
        useUpdateProject();
    const { mutateAsync: deleteProject, isLoading: isLoadingDeleteProject } =
        useDeleteProject();
    const { mutateAsync: createTerm } = useCreateTerm();
    const { mutateAsync: updateTerm } = useUpdateTerm();
    const { mutateAsync: deleteTerm } = useDeleteTerm();
    const { mutateAsync: saveTranslation } = useSaveTranslation();
    const {
        data: projectTerms,
        refetch: refetchProjectTerms,
        isLoading: isLoadingSearchTerms,
    } = useGetTerms(
        id as string,
        { q: searchFilterValue as string },
        {
            query: {
                onSuccess: () => {
                    clearNewRowTerm();
                },
            },
        },
    );
    // Functions
    async function handleOnDeleteTerm(termId: string) {
        try {
            await deleteTerm(
                { projectId: activeProject.id as string, termId: termId },
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
                    projectId: activeProject.id as string,
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
                projectId: activeProject.id as string,
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
    async function handleOnUpdateProject(
        form: IForm<IUpdateProjectForm> & IDefaultForm,
    ) {
        console.log(
            toUpdateProjectDTO(
                form.projectName.value,
                form.sourceLanguage.value,
                form.targetLanguages.value,
            ),
        );

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
                            id: activeProject.id as string,
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
    return {
        activeKey,
        setActiveKey,
        projectTerms,
        handleOnSaveTranslations,
        handleOnCreateTerm,
        handleOnDeleteTerm,
        setSearchFilterValue,
        searchFilterValue,
        sortValue,
        setSortValue,
        setIsDetectDuplicate,
        isDetectDuplicate,
        newRowTerm,
        setNewRowTerm,
        clearNewRowTerm,
        addNewRowTerm,
        handleOnUpdateProject,
        handleOnDeleteProject,
        isLoadingUpdateProject,
        isLoadingDeleteProject,
        isLoadingSearchTerms,
    };
};
