import { IDefaultForm, IForm } from 'utils/formik';

export type EditInputLogicType = {
    form: IForm<IEditInputForm> & IDefaultForm;
};

export interface IEditInputForm {
    translation: string;
    termId: string;
    languageId: string;
}
