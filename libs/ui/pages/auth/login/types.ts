import { IDefaultForm, IForm } from '../../../../utils/formik';

export type LoginLogicType = {
    handleOnSubmit(): void;
    form: IForm<ILoginFormik> & IDefaultForm;
};

export interface ILoginFormik {
    email: string;
    password: string;
}
