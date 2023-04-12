import { TranslationWithMetaDTO } from "gateways/resource-api/types";
import { IEditInputForm } from "./types";

export interface IEditInputProps {
    translation: TranslationWithMetaDTO
    updateTranslationsForm: (value: IEditInputForm) => void
}
export interface IEditInputLogicProps {
    translation: TranslationWithMetaDTO
}