import { useEffect, useState } from 'react';
import { ProjectLogicType } from './types';
import {
    useDeleteProject,
    useGetProject,
    useUpdateProject,
} from 'gateways/resource-api/projects/projects';
import {
    useCreateTerm,
    useDeleteTerm,
    useGetTerms,
    useUpdateTerm,
} from 'gateways/resource-api/terms/terms';
import { TermDTO } from 'gateways/resource-api/types';
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
import { useGetProjectLanguages } from 'gateways/resource-api/languages/languages';
import { v4 as uuidv4 } from 'uuid';

export const useProjectLogic = ({
    actualOrganisationUser,
    refecthOrganisationUserData,
    refetchActualUserOrganisation,
    refetchUserData,
    refetchOrganisationProjectData,
    organisationProjectData,
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
    const { mutateAsync: createTerm, isLoading: isLoadingCreateTerm } =
        useCreateTerm();
    const { mutateAsync: updateTerm, isLoading: isLoadingUpdateTerm } =
        useUpdateTerm();
    const { mutateAsync: deleteTerm, isLoading: isLoadingDeleteTerm } =
        useDeleteTerm();
    const { mutateAsync: saveTranslation } = useSaveTranslation();
    const {
        data: projectTerms,
        refetch: refetchProjectTerms,
        isLoading: isLoadingSearchTerms,
    } = useGetTerms(id as string, { q: searchFilterValue as string });

    const { data: projectData, refetch: refetchProjectData } = useGetProject(
        actualOrganisationUser?.id as string,
        id as string,
    );
    const { data: projectLanguages, refetch: refetchProjectLanguages } =
        useGetProjectLanguages(id as string);

    // Functions
    async function handleOnDeleteTerm(termId: string) {
        try {
            await deleteTerm(
                { projectId: id as string, termId: termId },
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

    async function callCreateTerm(
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) {
        try {
            await createTerm(
                {
                    projectId: id as string,
                    data: {
                        name: form.key.value,
                        description: form.description.value,
                    },
                },
                {
                    onSuccess: async (data) => {
                        await callSaveTranslations(form, data.id);
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
                projectId: id as string,
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
        termId?: string,
    ) {
        await Promise.all(
            form.translations.value.map((elt: IEditInputForm) =>
                saveTranslation({
                    termId: form.isNewTerm?.value === true ? (termId as string) : elt.termId,
                    languageId: elt.languageId,
                    data: { translation: elt.translation },
                }),
            ),
        )
            .then(() => {
                refetchProjectTerms();
                handleOnDeleteNewTerm(form.termId.value);
            })
            .catch((error) => {
                const err = error as AxiosError;
                toast({
                    type: ToastType.ERROR,
                    title: err.response?.data as string,
                    delay: 5000,
                });
            });
    }
    async function handleOnSaveTranslations(
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) {
        if (form.isNewTerm?.value === true) {
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
        term.id = uuidv4();
        setNewRowTerm((prev) => [...prev, term]);
    }
    async function handleOnUpdateProject(
        form: IForm<IUpdateProjectForm> & IDefaultForm,
    ) {
        const projectData = toUpdateProjectDTO(
            form.projectName.value,
            form.sourceLanguage.value,
            form.targetLanguages.value,
            form.iconColor.value,
        );

        if (projectData === undefined) {
            toast({
                type: ToastType.ERROR,
                title: t(
                    tKeys.home.modal.create_project.form.project_name.form
                        .error,
                ),
                delay: 5000,
            });

            return;
        }
        try {
            await updateProject(
                {
                    data: projectData,
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
                        refetchProjectTerms();
                        refetchProjectLanguages();
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
                    projectId: projectData?.id as string,
                },
                {
                    onSuccess: async () => {
                        refetchUserData();
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                        refetchOrganisationProjectData();
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

    function handleOnDeleteNewTerm(id: string) {
        const terms = newRowTerm.filter((term) => term.id != id);
        setNewRowTerm(terms);
    }
    return {
        activeKey,
        setActiveKey,
        projectTerms,
        handleOnSaveTranslations,
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
        projectData,
        projectLanguages,
        handleOnDeleteNewTerm,
        isLoadingCreateTerm,
        isLoadingUpdateTerm,
        isLoadingDeleteTerm,
    };
};
