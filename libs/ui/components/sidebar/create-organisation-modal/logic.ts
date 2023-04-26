import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { CreateOrganisationLogicType, ICreateOrganisationForm } from './types';
import { v4 as uuidv4 } from 'uuid';
import { IMembersType } from '../../../pages/auth/sign-up/organisation/add-members/types';
export const useCreateOrganisationLogic = (): CreateOrganisationLogicType => {
    // Attributes
    const [picturePath, setPicturePath] = useState<string>('');
    const [pictureBinary, setPictureBinary] = useState<
        string | ArrayBuffer | null
    >();

    // Formik
    const { values, ...rest } = useFormik<ICreateOrganisationForm>({
        initialValues: {
            organisationName: '',
            pictureBinary: undefined,
            members: [
                { customId: uuidv4(), email: undefined, role: undefined },
            ],
        },
        onSubmit: () => {},
        validateOnChange: false,
    });

    // Functions
    const form = createForm(values, rest);
    useEffect(() => {
        rest.setFieldValue('pictureBinary', pictureBinary);
    }, [pictureBinary]);

    function resetForm() {
        rest.setFieldValue('organisationName', '');
        setPicturePath('');
        setPictureBinary('');
    }

    function onDeletePicture() {
        setPicturePath('');
    }
    function onDrag(pictureUrl: string, binary?: string | ArrayBuffer | null) {
        setPicturePath(pictureUrl);
        setPictureBinary(binary);
    }
    function addEmptyMember() {
        if (form.members.value.length < 3) {
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
        picturePath,
        pictureBinary,
        onDrag,
        onDeletePicture,
        resetForm,
        addEmptyMember,
        updateMemberData,
        removeMember,
        form,
    };
};
