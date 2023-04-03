import {
    OrgnanisationPagingDTO,
    ProjectPagingDTO,
} from '../../../gateways/resource-api/types';
import { SearchBarOption } from '../inputs/searchbar/props';

export interface SidebarLogicType {
    handleOnCreateOrganizationClick: () => void;
    handleToggleIsOrganisationClicked: () => void;
    filter: (value: string) => SearchBarOption<string>[];
    handleOnProjectClick: (value: string) => void;
    handleOnOptionClick: (value: string) => void;
    activeOrganizationKey: number;
    setActiveOrganizationKey: (value: number) => void;
    organizationValue: string;
    setOrganizationValue: (value: string) => void;
    isOrganisationClicked: boolean;
    setIsOrganisationClicked: (value: boolean) => void;
    optionsOrganisation: any;
    organisationUserData?: OrgnanisationPagingDTO;
    activeProjectKey: string;
    setActiveProjectKey: (value: string) => void;
    options: SearchBarOption<string>[];
    projectsData?: ProjectPagingDTO;
    activeOptionKey: string;
    setActiveOptionKey: (value: string) => void;
    handleOnCreateProject: () => void;
}
