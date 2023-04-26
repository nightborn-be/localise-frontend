import { AddMembersLogicType } from './types';
import { useFormik } from 'formik';
import { createForm } from '../../../../../../utils/formik';
import {
    IAddMembersForm,
    IMembersType,
} from '../../../../../pages/auth/sign-up/organisation/add-members/types';
import { v4 as uuidv4 } from 'uuid';
export const useAddMembersLogic = (): AddMembersLogicType => {
    // Formik
    const { values, ...rest } = useFormik<IAddMembersForm>({
        initialValues: {
            members: [
                { customId: uuidv4(), email: undefined, role: undefined },
            ],
        },
        onSubmit: handleOnSubmit,
        validateOnChange: false,
    });
    const form = createForm(values, rest);

    // Functions
    function handleOnSubmit() {}

    function addEmptyMember() {
        if (form.members.value.length < 6) {
            const member: IMembersType = {
                customId: uuidv4(),
                email: undefined,
                role: undefined,
            };
            form.members.onChange([...form.members.value, member]);
        }
    }

    function updateMemberData(customId: string, email?: string, role?: string) {
        const index = findMembers(customId);
        if (index < 0) {
            return;
        }
        const member = form.members.value;
        member[index].email = email;
        member[index].role = role;
        form.members.onChange(member);
    }

    function removeMember(customId: string) {
        const index = findMembers(customId);
        const members = form.members.value as IMembersType[];
        const member = form.members.value.at(index) as IMembersType;
        form.members.onChange(
            members.filter((obj) => obj.customId != member.customId),
        );
    }
    function findMembers(id: string): number {
        return form.members.value.findIndex(
            (obj: IMembersType) => obj.customId == id,
        );
    }

    return {
        form,
        handleOnSubmit,
        addEmptyMember,
        updateMemberData,
        removeMember,
    };
};
