import { IDefaultForm, IForm } from '../../../../../../utils/formik';

export interface AddMembersLogicType {
    form: IForm<IAddMembersForm> | IDefaultForm;
    handleOnSubmit: () => void;
}

export interface IAddMembersForm {
    email: string[];
    role: string[];
}
