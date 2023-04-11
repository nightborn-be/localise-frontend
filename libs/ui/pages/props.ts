import { IDefaultForm, IForm } from "utils/formik";
import { IOrganisationSettingsForm } from "./components/organisation-settings/types";
import { OrganisationDTO, OrgnanisationPagingDTO, ProjectDTO } from "gateways/resource-api/types";
import { TermPagingDTO } from '../../gateways/resource-api/types/termPagingDTO';

export interface IHomePageProps {
    handleOnDeleteOrganisation: () => void;
    handleUpdateOrganisation: (form: IForm<IOrganisationSettingsForm> & IDefaultForm) => void
    isLoadingUpdateOrganisation: boolean;
    actualOrganisationUser?: OrganisationDTO;
    organisationUserData?: OrgnanisationPagingDTO;
    projectTerms?: TermPagingDTO
    activeProject?: ProjectDTO;
}