import { IForm } from "../../../../../utils/formik"

export type OrganizationLogicType = {
    handleOnSubmit: () => void,
    form: IForm<IOrganizationFormik>,
}

export interface IOrganizationFormik {
    organizationName: string,
}