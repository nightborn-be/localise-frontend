import { IDefaultForm, IForm } from "../../../../../../../../utils/formik"
import { IOrganisationSettingsForm } from "../../../../types"

export interface IEditOrganisationContentProps {
    informationsRef: React.RefObject<HTMLDivElement>
    form: IForm<IOrganisationSettingsForm> & IDefaultForm
    deleteOrganisationDisclosure: any;
}