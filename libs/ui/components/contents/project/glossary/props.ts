import {
    ProjectDTO,
    TermDTO,
    TermPagingDTO,
} from 'gateways/resource-api/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { ITableRowTermForm } from './components/table-row-term/types';

export interface IGlossaryProps {
    projectTerms?: TermPagingDTO;
    handleOnSaveTranslations: (
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) => void;
    handleOnCreateTerm: (projectId: string) => void;
    handleOnDeleteTerm: (termId: string) => void;
    handleOnDeleteNewTerm: (id: string) => void;
    activeProject?: string;
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
    isLoadingSearchTerms: boolean;
    projectData?: ProjectDTO;
}

export interface IGlossaryLogicProps {
    addNewRowTerm: (term: TermDTO) => void;
}
