import { IDefaultForm, IForm } from "../../../../utils/formik";

export type LoginLogicType = {
    handleOnSubmit(): Promise<void>
    form: IForm<ILoginFormik> & IDefaultForm
}

export interface ILoginFormik {
    email: string,
    password: string
}