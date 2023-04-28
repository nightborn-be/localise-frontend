import { IDefaultForm, IForm } from 'utils/formik';
import {
    OrgnanisationPagingDTO,
    OrganisationDTO,
    ProjectPagingDTO,
    ProjectDTO,
} from '../../../gateways/resource-api/types';
import { SearchBarOption } from '../inputs/searchbar/props';
import { ICreateProjectForm } from './create-project-modal/types';
import { ICreateOrganisationForm } from './create-organisation-modal/types';

export interface SidebarLogicType {
    handleToggleIsOrganisationClicked: () => void;
    handleOnOptionClick: (value: string) => void;
    isOrganisationClicked: boolean;
    setIsOrganisationClicked: (value: boolean) => void;
    options: SearchBarOption<string>[];
    activeOptionKey: string;
    setActiveOptionKey: (value: string) => void;
    handleOnCreateProject: (
        form: IForm<ICreateProjectForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleOnCreateOrganisation: (
        form: IForm<ICreateOrganisationForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleSwitchOrgansiation: (organisation: OrganisationDTO) => void;
    actualOrganisationUser?: OrganisationDTO;
    organisationProjectData?: ProjectPagingDTO;
    organisationUserData?: OrgnanisationPagingDTO;
    setFilterProjectValue: (value: string) => void;
    filterProjectValue: string;
    activeProject: ProjectDTO;
    setActiveProject: (value: ProjectDTO) => void;
    refetchActualUserOrganisation?: any;
    refecthOrganisationUserData?: any;
    refetchUserData?: any;
    refetchOrganisationProjectData?: any;
    createProjectModalDisclosure: any;
    isDisableOnCloseProjectModal: boolean;
    handleOnClickProject: (
        option: SearchBarOption<string>,
        activeProject: ProjectDTO,
        setActiveProject: (value: ProjectDTO) => void,
        clearNewRowTerm?: () => void,
        setSearchFilterValue?: (value: string) => void,
    ) => void;
    isLoadingSearchProject: boolean;
}
