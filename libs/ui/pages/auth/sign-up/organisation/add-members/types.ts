import { IDefaultForm, IForm } from 'utils/formik';

export type AddMembersLogicType = {
    handleOnSubmit: () => void;
    addEmptyMember: () => void;
    updateMemberData: (customId: string, email?: string, role?: string) => void;
    removeMember: (customId: string) => void;
    form: IForm<IAddMembersForm> & IDefaultForm;
};

export interface IAddMembersForm {
    members: IMembersType[];
}

export type IMembersType = {
    customId: string;
    email?: string;
    role?: string;
};
