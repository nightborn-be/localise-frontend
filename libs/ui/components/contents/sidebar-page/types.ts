import { IDefaultForm, IForm } from "utils/formik";
import { ICreateProjectForm } from "../../../components/sidebar/create-project-modal/types";
import { ICreateOrganisationForm } from "../../../components/sidebar/create-organisation-modal/types";
import { OrganisationDTO, OrgnanisationPagingDTO, ProjectDTO, ProjectPagingDTO } from "gateways/resource-api/types";

export interface SidebarPageLogicType {
    handleOnCreateProject: (
        form: IForm<ICreateProjectForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleOnCreateOrganisation: (
        form: IForm<ICreateOrganisationForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleSwitchOrgansiation: (
        organisation: OrganisationDTO,
        setIsOrganisationClicked: (value: boolean) => void,
    ) => void;
    actualOrganisationUser?: OrganisationDTO;
    organisationProjectData?: ProjectPagingDTO;
    organisationUserData?: OrgnanisationPagingDTO;
    setFilterProjectValue: (value: string) => void;
    filterProjectValue: string;
    activeProject: ProjectDTO;
    setActiveProject: (value: ProjectDTO) => void;

}