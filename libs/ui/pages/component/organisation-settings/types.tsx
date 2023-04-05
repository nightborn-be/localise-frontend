import { IDefaultForm, IForm } from '../../../../utils/formik';

export interface OrganisationSettingsLogicType {
    handleOnSubmit: () => void;
    form: IForm<IOrganisationSettingsForm> & IDefaultForm;
}

export interface IOrganisationSettingsForm {
    organisationName: string;
    picturePath: string;
}
