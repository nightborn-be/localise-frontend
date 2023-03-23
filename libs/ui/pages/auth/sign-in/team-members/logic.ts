import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { createForm } from '../../../../../utils/formik';
import { ITeamMembersFormik, TeamMembersLogicType } from './types'
export const useTeamMembersLogic = (): TeamMembersLogicType => {

    // Attributes
    const { push } = useRouter();

    // Formik
    const { values, dirty, setFieldError, ...rest } = useFormik<ITeamMembersFormik>({
        initialValues: {
            teamMembers: [''],
        },
        onSubmit: handleOnSubmit,
    });
    const form = createForm(values, rest);

    // Functions
    async function handleOnSubmit() { push('/auth/sign-in/organization/picture'); return; };

    function removeMember(email: string) {
        rest.setFieldValue(
            'teamMembers',
            values.teamMembers.filter((elt) => elt !== email),
        );
    }
    function addMember() {
        rest.setFieldValue('teamMembers', values.teamMembers.concat(''));
    }

    return {
        handleOnSubmit,
        form,
        values,
        removeMember,
        addMember,
    }

}