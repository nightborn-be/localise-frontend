import {
    OrgnanisationPagingDTO,
    OrganisationDTO,
    ProjectPagingDTO,
    ProjectDTO,
} from '../../../gateways/resource-api/types';
import { SearchBarOption } from '../inputs/searchbar/props';

export interface SidebarLogicType {
    handleToggleIsOrganisationClicked: () => void;
    handleOnOptionClick: (value: string) => void;
    isOrganisationClicked: boolean;
    setIsOrganisationClicked: (value: boolean) => void;
    options: SearchBarOption<string>[];
    activeOptionKey: string;
    setActiveOptionKey: (value: string) => void;
    handleOnClickProject: (
        option: SearchBarOption<string>,
        clearNewRowTerm: () => void,
        setSearchFilterValue: (value: string) => void,
        activeProject: ProjectDTO,
        setActiveProject: (value: ProjectDTO) => void,
    ) => void;
}
