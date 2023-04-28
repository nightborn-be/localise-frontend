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
    activeProject?: string;
    isDisabled?: boolean;
    handleOnSaveTranslations: (
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) => void;
    handleOnDeleteTerm: (termId: string) => void;
    clearNewRowTerm: () => void;
}

export interface ITableRowTermLogicProps {
    term: TermDTO;
    activeProject?: string;
}
