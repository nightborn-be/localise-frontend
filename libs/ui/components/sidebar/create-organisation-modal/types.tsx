import { IDefaultForm, IForm } from '../../../../utils/formik';

export interface CreateOrganisationLogicType {
    onDeletePicture: () => void;
    onDrag: (
        pictureUrl: string,
        binary?: string | ArrayBuffer | null | undefined,
    ) => void;
    picturePath?: string;
    handleOnSubmit: () => void;
    form: IForm<ICreateOrganisationForm> & IDefaultForm;
    resetForm: () => void;
}

export interface ICreateOrganisationForm {
    organisationName: string;
}
