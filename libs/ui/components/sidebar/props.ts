import { HomeContentState } from 'ui/pages/types';
import {
    CreateOrganisationDTO,
    CreateProjectDTO,
    OrganisationDTO,
    OrgnanisationPagingDTO,
    ProjectDTO,
    ProjectPagingDTO,
} from '../../../gateways/resource-api/types';
import { IDefaultForm, IForm } from '../../../utils/formik';
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
    organisationProjectData?: ProjectPagingDTO;
    actualOrganisationUser?: OrganisationDTO;
    organisationUserData?: OrgnanisationPagingDTO;
    setFilterProjectValue: (value: string) => void;
    filterProjectValue: string;
    activeProject: ProjectDTO;
    setActiveProject: (value: ProjectDTO) => void;
    setCurrentStatePage: (value: HomeContentState) => void;
}
export interface ISidebarLogicProps {
    organisationProjectData?: ProjectPagingDTO;
}
