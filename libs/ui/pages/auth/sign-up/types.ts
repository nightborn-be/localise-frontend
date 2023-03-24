import { IDefaultForm, IForm } from '../../../../utils/formik';

export type SignUpLogicType = {
    handleOnSubmit(): void;
    form: IForm<ISignUpFormik> & IDefaultForm;
};

export interface ISignUpFormik {
    email: string;
    password: string;
}
