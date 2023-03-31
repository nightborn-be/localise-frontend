import { IDefaultForm, IForm } from '../../../../utils/formik';

export interface ISignUpLogicResponse {
    handleOnSubmit: () => void;
    form: IForm<ISignUpForm> & IDefaultForm;
}

export interface ISignUpForm {
    email: string;
    password: string;
}
