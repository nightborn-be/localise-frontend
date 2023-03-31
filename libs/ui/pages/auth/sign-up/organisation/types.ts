import { IDefaultForm, IForm } from '../../../../../utils/formik';

export type OrganisationLogicResponse = {
    handleOnSubmit: () => void;
    form: IForm<IOrganisationForm> & IDefaultForm;
};

export interface IOrganisationForm {
    organizationName: string;
}
