import { IDefaultForm, IForm } from 'utils/formik';

export type EditInputLogicType = {
    form: IForm<IEditInputForm> & IDefaultForm;
    isFocused: boolean;
    setIsFocused: (value: boolean) => void;
};

export interface IEditInputForm {
    translation: string;
    termId: string;
    languageId: string;
}
