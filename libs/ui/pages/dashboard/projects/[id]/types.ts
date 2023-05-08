import {
    LanguagePagingDTO,
    ProjectDTO,
    TermDTO,
    TermPagingDTO,
} from 'gateways/resource-api/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { ITableRowTermForm } from '../../../../components/contents/project/glossary/components/table-row-term/types';
import { IUpdateProjectForm } from '../../../../components/contents/project/settings/types';

import { FetchNextPageOptions, InfiniteQueryObserverResult } from '@tanstack/react-query';
export interface ProjectLogicType {
    activeKey?: React.Key;
    setActiveKey: (value?: React.Key) => void;
    projectTerms?: TermPagingDTO;
    handleOnSaveTranslations: (
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) => void;
    handleOnDeleteTerm: (termId: string) => void;
    setSearchFilterValue: (value: string) => void;
    searchFilterValue: string;
    setSortValue: (value: string) => void;
    sortValue: string;
    setIsDetectDuplicate: (value: boolean) => void;
    isDetectDuplicate: boolean;
    newRowTerm: TermDTO[];
    setNewRowTerm: (value: TermDTO[]) => void;
    clearNewRowTerm: () => void;
    addNewRowTerm: (term: TermDTO) => void;
    handleOnUpdateProject: (
        form: IForm<IUpdateProjectForm> & IDefaultForm,
    ) => void;
    handleOnDeleteProject: () => void;
    isLoadingUpdateProject: boolean;
    isLoadingDeleteProject: boolean;
    isLoadingSearchTerms: boolean;
    projectData?: ProjectDTO;
    handleOnDeleteNewTerm: (id: string) => void;
    projectLanguages: LanguagePagingDTO | undefined;
    isLoadingCreateTerm: boolean;
    isLoadingUpdateTerm: boolean;
    isLoadingDeleteTerm: boolean;
    onFetchProjectTermsNextPage: () => void
    isFetchingProjectTermsNextPage: boolean;
}
