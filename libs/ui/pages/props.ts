import { IDefaultForm, IForm } from "utils/formik";
import { IOrganisationSettingsForm } from "./components/organisation-settings/types";
import { OrganisationDTO, OrgnanisationPagingDTO, ProjectDTO, TranslationWithMetaPagingDTO } from "gateways/resource-api/types";
import { TermPagingDTO } from '../../gateways/resource-api/types/termPagingDTO';
import { ITableRowTermForm } from "./components/project/components/glossary/components/table-row-term/types";

export interface IHomePageProps {
    handleOnDeleteOrganisation: () => void;
    handleUpdateOrganisation: (form: IForm<IOrganisationSettingsForm> & IDefaultForm) => void
    handleOnSaveTranslations: (form: IForm<ITableRowTermForm> & IDefaultForm) => void
    isLoadingUpdateOrganisation: boolean;
    actualOrganisationUser?: OrganisationDTO;
    organisationUserData?: OrgnanisationPagingDTO;
    projectTerms?: TermPagingDTO
    activeProject?: ProjectDTO;
    handleOnCreateTerm: (projectId: string) => void
}