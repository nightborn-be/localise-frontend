import {
    OrgnanisationPagingDTO,
    OrganisationDTO,
    ProjectPagingDTO,
} from '../../../gateways/resource-api/types';
import { SearchBarOption } from '../inputs/searchbar/props';

export interface SidebarLogicType {
    handleOnCreateOrganizationClick: () => void;
    handleToggleIsOrganisationClicked: () => void;
    setFilterProjectValue: (value: string) => void;
    handleOnProjectClick: (value: string) => void;
    handleOnOptionClick: (value: string) => void;
    filterProjectValue: string;
    actualOrganisationUser?: OrganisationDTO;
    isOrganisationClicked: boolean;
    setIsOrganisationClicked: (value: boolean) => void;
    organisationUserData?: OrgnanisationPagingDTO;
    activeProjectKey: string;
    setActiveProjectKey: (value: string) => void;
    options: SearchBarOption<string>[];
    projectsData?: ProjectPagingDTO;
    activeOptionKey: string;
    setActiveOptionKey: (value: string) => void;
    handleOnCreateProject: () => void;
    getInitialeName: () => string;
    switchOrgansiation: (OrganisationDTO) => void;
}
