import { OrganisationDTO } from "../../../../gateways/resource-api/types";
import { IDefaultForm, IForm } from "../../../../utils/formik";
import { IOrganisationSettingsForm } from "../../components/organisation-settings/types";

export interface OrganisationSettingsPageLogicType {
    handleOnDeleteOrganisation: () => void;
    handleUpdateOrganisation: (
        form: IForm<IOrganisationSettingsForm> & IDefaultForm,
    ) => void;
    isLoadingUpdateOrganisation: boolean;
    actualOrganisationUser?: OrganisationDTO;
}
