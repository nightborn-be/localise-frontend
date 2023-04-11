import {
    OrgnanisationPagingDTO,
    OrganisationDTO,
    ProjectPagingDTO,
} from '../../../gateways/resource-api/types';
import { SearchBarOption } from '../inputs/searchbar/props';

export interface SidebarLogicType {
    handleToggleIsOrganisationClicked: () => void;
    handleOnProjectClick: (value: string) => void;
    handleOnOptionClick: (value: string) => void;
    isOrganisationClicked: boolean;
    setIsOrganisationClicked: (value: boolean) => void;
    activeProjectKey: string;
    setActiveProjectKey: (value: string) => void;
    options: SearchBarOption<string>[];
    activeOptionKey: string;
    setActiveOptionKey: (value: string) => void;
}
