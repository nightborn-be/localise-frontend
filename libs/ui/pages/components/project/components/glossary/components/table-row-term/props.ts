import { TermDTO, TermPagingDTO, TranslationWithMetaDTO, TranslationWithMetaPagingDTO } from "gateways/resource-api/types";
import { IDefaultForm, IForm } from "utils/formik";
import { ITableRowTermForm } from "./types";

export interface ITableRowTermProps {
    translation?: TranslationWithMetaDTO
    translations?: TranslationWithMetaPagingDTO
    term: TermDTO
    handleOnSaveTranslations: (form: IForm<ITableRowTermForm> & IDefaultForm) => void
}

export interface ITableRowTermLogicProps {
    term: TermDTO
}