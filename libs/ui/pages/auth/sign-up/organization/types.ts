import { IDefaultForm, IForm } from '../../../../../utils/formik';

export type OrganizationLogicType = {
    handleOnSubmit(): void;
    form: IForm<IOrganizationFormik> & IDefaultForm;
};

export interface IOrganizationFormik {
    organizationName: string;
}
