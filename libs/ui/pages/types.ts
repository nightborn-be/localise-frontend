import { ICreateOrganisationForm } from 'ui/components/sidebar/create-organisation-modal/types';
import { ICreateProjectForm } from 'ui/components/sidebar/create-project-modal/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { IOrganisationSettingsForm } from './components/organisation-settings/types';
import { OrganisationDTO, ProjectDTO, ProjectPagingDTO, TermPagingDTO } from 'gateways/resource-api/types';

export const enum HomeContentState {
    ORGANISATION_SETTINGS = 'ORGANISATION_SETTINGS',
    PROJECTS = 'PROJECTS',
}

export interface HomeLogicType {
    handleOnCreateProject: (
        form: IForm<ICreateProjectForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleOnCreateOrganisation: (
        form: IForm<ICreateOrganisationForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleOnDeleteOrganisation: () => void;
    handleUpdateOrganisation: (form: IForm<IOrganisationSettingsForm> & IDefaultForm) => void
    isLoadingUpdateOrganisation: boolean;
    actualOrganisationUser?: OrganisationDTO;
    handleSwitchOrgansiation: (organisation: OrganisationDTO, setIsOrganisationClicked: (value: boolean) => void) => void;
    organisationProjectData?: ProjectPagingDTO;
    setFilterProjectValue: (value: string) => void;
    filterProjectValue: string;
    projectTerms?: TermPagingDTO;
    activeProject: ProjectDTO
    setActiveProject: (value: ProjectDTO) => void
}
