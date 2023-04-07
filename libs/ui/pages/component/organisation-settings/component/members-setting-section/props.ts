import { IDefaultForm, IForm } from "../../../../../../utils/formik";
import { IOrganisationSettingsForm } from "../../types";

export interface IMembersSettingSectionProps {
    membersRef: React.RefObject<HTMLDivElement>
    addMembersDisclosure: any,
    isLoading: boolean,
    handleOnSubmit: () => void
}