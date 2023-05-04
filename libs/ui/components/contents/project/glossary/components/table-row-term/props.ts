import {
    LanguagePagingDTO,
    TermDTO,
    TranslationWithMetaDTO,
    TranslationWithMetaPagingDTO,
} from 'gateways/resource-api/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { ITableRowTermForm } from './types';

export interface ITableRowTermProps {
    projectLanguages?: LanguagePagingDTO;
    translation?: TranslationWithMetaDTO;
    translations?: TranslationWithMetaPagingDTO;
    term: TermDTO;
    isDisabled?: boolean;
    handleOnSaveTranslations: (
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) => void;
    handleOnDeleteTerm: (termId: string) => void;
    isNewTerm?: boolean;
}

export interface ITableRowTermLogicProps {
    term: TermDTO;
    languages?: LanguagePagingDTO;
    isNewTerm: boolean;
}
