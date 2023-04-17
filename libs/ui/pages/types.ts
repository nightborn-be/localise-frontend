import { ICreateOrganisationForm } from 'ui/components/sidebar/create-organisation-modal/types';
import { ICreateProjectForm } from 'ui/components/sidebar/create-project-modal/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { IOrganisationSettingsForm } from './components/organisation-settings/types';
import {
    OrganisationDTO,
    ProjectDTO,
    ProjectPagingDTO,
    TermDTO,
    TermPagingDTO,
} from 'gateways/resource-api/types';
import { ITableRowTermForm } from './components/project/components/glossary/components/table-row-term/types';
import { IUpdateProjectForm } from './components/project/components/settings/types';

export const enum HomeContentState {
    ORGANISATION_SETTINGS = 'ORGANISATION_SETTINGS',
    PROJECTS = 'PROJECTS',
}

export interface HomeLogicType {
    handleOnCreateProject: (
        form: IForm<ICreateProjectForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;

    handleOnUpdateProject: (
        form: IForm<IUpdateProjectForm> & IDefaultForm,
    ) => void;
    handleOnDeleteProject: () => void
    handleOnCreateOrganisation: (
        form: IForm<ICreateOrganisationForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleOnDeleteOrganisation: () => void;
    handleUpdateOrganisation: (
        form: IForm<IOrganisationSettingsForm> & IDefaultForm,
    ) => void;
    isLoadingUpdateOrganisation: boolean;
    actualOrganisationUser?: OrganisationDTO;
    handleSwitchOrgansiation: (
        organisation: OrganisationDTO,
        setIsOrganisationClicked: (value: boolean) => void,
    ) => void;
    organisationProjectData?: ProjectPagingDTO;
    setFilterProjectValue: (value: string) => void;
    filterProjectValue: string;
    projectTerms?: TermPagingDTO;
    activeProject: ProjectDTO;
    setActiveProject: (value: ProjectDTO) => void;
    handleOnSaveTranslations: (
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) => void;
    handleOnCreateTerm: (projectId: string) => void;
    handleOnDeleteTerm: (projectId: string, termId: string) => void;
    setSearchFilterValue: (value: string) => void;
    searchFilterValue: string;
    setIsDetectDuplicate: (value: boolean) => void;
    isDetectDuplicate: boolean;
    currentStatePage: HomeContentState;
    setCurrentStatePage: (value: HomeContentState) => void;
    newRowTerm: TermDTO[]
    setNewRowTerm: (value: TermDTO[]) => void,
    clearNewRowTerm: () => void,
    addNewRowTerm: (term: TermDTO) => void
}
