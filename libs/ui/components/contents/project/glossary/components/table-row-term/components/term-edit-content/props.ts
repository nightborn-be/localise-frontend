import {
    LanguagePagingDTO,
    TermDTO,
    TranslationWithMetaPagingDTO,
} from 'gateways/resource-api/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { ITableRowTermForm } from '../../types';
import { IEditInputForm } from '../edit-input/types';

export interface ITermEditContentProps {
    isOpen: boolean;
    translations?: TranslationWithMetaPagingDTO;
    form: IForm<ITableRowTermForm> & IDefaultForm;
    handleOnSaveTranslations: (
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) => void;
    updateTranslationsForm: (value: IEditInputForm) => void;
    handleOnDeleteTerm: (termId: string) => void;
    toggleIsOpen: () => void;
    projectLanguages?: LanguagePagingDTO;
}

export interface ITermEditContentLogicProps {
    term: TermDTO;
}
