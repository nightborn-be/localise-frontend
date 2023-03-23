import { IDefaultForm, IForm } from "../../../../../utils/formik";

export type TeamMembersLogicType = {
    handleOnSubmit(): void
    form: IForm<ITeamMembersFormik> & IDefaultForm
    values: ITeamMembersFormik,
    removeMember: (email: string) => void,
    addMember: () => void,
}

export interface ITeamMembersFormik {
    teamMembers: string[]
}