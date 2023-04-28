import {
    OrganisationDTO,
    OrgnanisationPagingDTO,
    ProjectDTO,
    ProjectPagingDTO,
} from '../../../gateways/resource-api/types';
import { IDefaultForm, IForm } from '../../../utils/formik';
import { SearchBarOption } from '../inputs/searchbar/props';
import { ICreateOrganisationForm } from './create-organisation-modal/types';
import { ICreateProjectForm } from './create-project-modal/types';

export interface ISideBarContentProps {
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
    organisationUserData?: OrgnanisationPagingDTO;
    setFilterProjectValue: (value: string) => void;
    filterProjectValue: string;
    activeProject: ProjectDTO;
    setActiveProject: (value: ProjectDTO) => void;
    createProjectModalDisclosure: any;
    isDisableOnCloseProjectModal: boolean;
    handleToggleIsOrganisationClicked: () => void;
    handleOnOptionClick: (value: string) => void;
    isOrganisationClicked: boolean;
    setIsOrganisationClicked: (value: boolean) => void;
    options: SearchBarOption<string>[];
    activeOptionKey: string;
    isLoadingSearchProject: boolean;
    clearNewRowTerm: () => void;
    setSearchFilterValue: (value: string) => void;
}
export interface ISidebarLogicProps {
    organisationProjectData?: ProjectPagingDTO;
}
