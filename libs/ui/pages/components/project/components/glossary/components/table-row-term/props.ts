import {
    ProjectDTO,
    TermDTO,
    TranslationWithMetaDTO,
    TranslationWithMetaPagingDTO,
} from 'gateways/resource-api/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { ITableRowTermForm } from './types';

export interface ITableRowTermProps {
    translation?: TranslationWithMetaDTO;
    translations?: TranslationWithMetaPagingDTO;
    term: TermDTO;
    handleOnSaveTranslations: (
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) => void;
    handleOnDeleteTerm: (projectId: string, termId: string) => void;
    activeProject?: ProjectDTO;
    clearNewRowTerm: () => void;
}

export interface ITableRowTermLogicProps {
    term: TermDTO;
    activeProject?: ProjectDTO;
}
