import { IDefaultForm, IForm } from "../../../../utils/formik";

export type SignInLogicType = {
    handleOnSubmit(): Promise<void>
    form: IForm<ISignInFormik> & IDefaultForm
}

export interface ISignInFormik {
    email: string,
    password: string
}