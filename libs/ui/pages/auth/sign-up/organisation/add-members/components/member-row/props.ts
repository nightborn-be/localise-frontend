import { IDefaultForm, IForm } from '../../../../../../../../utils/formik';
import { IAddMembersForm } from '../../types';
export interface IMemberRowProps {
    onChange: (email?: string, role?: string) => void;
    onDelete: () => void;
    index: number;
}

export interface IMemberRowLogicProps {
    addForm: (form: IForm<IAddMembersForm> & IDefaultForm) => void;
}
