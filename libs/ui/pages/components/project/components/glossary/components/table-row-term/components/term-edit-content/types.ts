import { IDefaultForm, IForm } from 'utils/formik';

export type TermEditContentLogicType = {
    form: IForm<ITermEditContentForm> & IDefaultForm;
};

export interface ITermEditContentForm {
    key: string;
    description: string;
}
