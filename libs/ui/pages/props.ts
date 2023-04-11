import { IDefaultForm, IForm } from "utils/formik";
import { IOrganisationSettingsForm } from "./components/organisation-settings/types";
import { OrganisationDTO, OrgnanisationPagingDTO } from "gateways/resource-api/types";

export interface IHomePageProps {
    handleOnDeleteOrganisation: () => void;
    handleUpdateOrganisation: (form: IForm<IOrganisationSettingsForm> & IDefaultForm) => void
    isLoadingUpdateOrganisation: boolean;
    actualOrganisationUser?: OrganisationDTO;
    organisationUserData?: OrgnanisationPagingDTO
}