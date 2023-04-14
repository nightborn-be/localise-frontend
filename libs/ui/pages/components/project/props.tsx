import {
    ProjectDTO,
    TermDTO,
    TermPagingDTO,
} from 'gateways/resource-api/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { ITableRowTermForm } from './components/glossary/components/table-row-term/types';

export interface IProjectContentProps {
    projectTerms?: TermPagingDTO;
    activeProject?: ProjectDTO;
    handleOnSaveTranslations: (
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) => void;
    handleOnCreateTerm: (projectId: string) => void;
    handleOnDeleteTerm: (projectId: string, termId: string) => void;
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
}
