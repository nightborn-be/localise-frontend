import {
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
    handleOnDeleteTerm: (projectId: string, termId: string) => void;
    clearNewRowTerm: () => void;
}

export interface ITermEditContentLogicProps {
    term: TermDTO;
}
