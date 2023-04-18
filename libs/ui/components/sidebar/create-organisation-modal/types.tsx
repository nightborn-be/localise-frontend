import { IDefaultForm, IForm } from '../../../../utils/formik';

export interface CreateOrganisationLogicType {
    onDeletePicture: () => void;
    onDrag: (
        pictureUrl: string,
        binary?: string | ArrayBuffer | null | undefined,
    ) => void;
    picturePath?: string;
    form: IForm<ICreateOrganisationForm> & IDefaultForm;
    resetForm: () => void;
    pictureBinary?: string | ArrayBuffer | null;
}

export interface ICreateOrganisationForm {
    organisationName: string;
    pictureBinary?: string | ArrayBuffer | null | undefined;
}
