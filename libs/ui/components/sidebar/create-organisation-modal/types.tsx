import { IDefaultForm, IForm } from '../../../../utils/formik';
import { IMembersType } from '../../../pages/auth/sign-up/organisation/add-members/types';

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
    addEmptyMember: () => void;
    updateMemberData: (customId: string, email?: string, role?: string) => void;
    removeMember: (customId: string) => void;
}

export interface ICreateOrganisationForm {
    organisationName: string;
    pictureBinary?: string | ArrayBuffer | null | undefined;
    members: IMembersType[];
}
