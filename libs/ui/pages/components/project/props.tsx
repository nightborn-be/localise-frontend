import {
    ProjectDTO,
    TermPagingDTO,
    TranslationWithMetaDTO,
    TranslationWithMetaPagingDTO,
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
}

export interface IProjectContentPropsLogicProps {}
