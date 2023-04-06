import { IDefaultForm, IForm } from '../../../../utils/formik';

export interface OrganisationSettingsLogicType {
    handleOnSubmit: () => void;
    form: IForm<IOrganisationSettingsForm> & IDefaultForm;
    setOrganisationPicture: (binary: string | ArrayBuffer | null) => void;
    pictureUrl: string;
    getInitialeName: () => string;
    isLoading: boolean;
}

export interface IOrganisationSettingsForm {
    organisationName: string;
}
