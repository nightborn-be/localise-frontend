import {
    OrganisationDTO,
    OrgnanisationPagingDTO,
    ProjectDTO,
} from '../../../gateways/resource-api/types';
import { IDefaultForm, IForm } from '../../../utils/formik';
import { ICreateOrganisationForm } from './create-organisation-modal/types';
import { ICreateProjectForm } from './create-project-modal/types';
import { SearchBarColorOption } from './types';

export interface ISideBarContentProps {
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
    organisationUserData?: OrgnanisationPagingDTO;
    setFilterProjectValue: (value: string) => void;
    filterProjectValue: string;
    projectData?: ProjectDTO;
    createProjectModalDisclosure: any;
    isDisableOnCloseProjectModal: boolean;
    handleToggleIsOrganisationClicked: () => void;
    handleOnOptionClick: (value: string) => void;
    isOrganisationClicked: boolean;
    setIsOrganisationClicked: (value: boolean) => void;
    options: SearchBarColorOption<string>[];
    activeOptionKey: string;
    isLoadingSearchProject: boolean;
    clearNewRowTerm?: () => void;
    setSearchFilterValue?: (value: string) => void;
    handleOnClickProject: (
        option: SearchBarColorOption<string>,
        clearNewRowTerm?: () => void,
    ) => void;
    handleOnUpdateColorProject: (iconColor: string) => void;
}
export interface ISidebarLogicProps {
}
