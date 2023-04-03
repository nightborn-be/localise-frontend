import { IDefaultForm, IForm } from '../../../../utils/formik';

export type ModalType = {
    handleOnSubmit(): void;
    form: IForm<IModalFormik> & IDefaultForm;
};

export interface IModalFormik {
    projectName: string;
    sourceLanguage: string;
    targetLanguages: string[];
}
