import { IDefaultForm, IForm } from '../../../../../../utils/formik';
import {
    IAddMembersForm,
    IMembersType,
} from '../../../../../pages/auth/sign-up/organisation/add-members/types';

export interface AddMembersLogicType {
    form: IForm<IAddMembersForm> & IDefaultForm;
    handleOnSubmit: () => void;
    addEmptyMember: () => void;
    updateMemberData: (customId: string, email?: string, role?: string) => void;
    removeMember: (customId: string) => void;
}




