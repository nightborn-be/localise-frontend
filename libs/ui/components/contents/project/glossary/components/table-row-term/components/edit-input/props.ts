import {
    LanguageDTO,
    TranslationWithMetaDTO,
} from 'gateways/resource-api/types';
import { IEditInputForm } from './types';

export interface IEditInputProps {
    translation?: TranslationWithMetaDTO;
    language?: LanguageDTO;
    updateTranslationsForm: (value: IEditInputForm) => void;
    datacy?: string;
}
export interface IEditInputLogicProps {
    translation?: TranslationWithMetaDTO;
    language?: LanguageDTO;
}
