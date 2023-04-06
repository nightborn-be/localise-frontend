import { IDefaultForm, IForm } from '../../../../utils/formik';

export interface OrganisationSettingsLogicType {
    handleOnSubmit: () => void;
    handleOnDelete: () => void;
    form: IForm<IOrganisationSettingsForm> & IDefaultForm;
    setOrganisationPicture: (value: string) => void;
}

export interface IOrganisationSettingsForm {
    organisationName: string;
    organisationPicture: string;
}
