import { IDefaultForm, IForm } from "utils/formik"
import { IEditInputForm } from "./components/edit-input/types"
import { FormikErrors } from "formik"
import { TranslationWithMetaPagingDTO } from "gateways/resource-api/types"

export type TableRowTermLogicType = {
    form: IForm<ITableRowTermForm> & IDefaultForm
    updateTranslationsForm: (value: IEditInputForm) => void
    translations?: TranslationWithMetaPagingDTO
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    toggleIsOpen: () => void
    targetLanguagesToDisplayValue: () => string
    getSourceLanguage: () => string
}

export interface ITableRowTermForm {
    projectId: string
    termId: string
    key: string
    description: string
    translations: IEditInputForm[]
}
