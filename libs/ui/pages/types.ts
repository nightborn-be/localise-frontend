import { ICreateOrganisationForm } from 'ui/components/sidebar/create-organisation-modal/types';
import { ICreateProjectForm } from 'ui/components/sidebar/create-project-modal/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { IOrganisationSettingsForm } from './components/organisation-settings/types';
import { OrganisationDTO, ProjectDTO, ProjectPagingDTO, TermPagingDTO, TranslationWithMetaDTO } from 'gateways/resource-api/types';
import { ITableRowTermForm } from './components/project/components/glossary/components/table-row-term/types';

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
    handleOnSaveTranslations: (form: IForm<ITableRowTermForm> & IDefaultForm) => void
    handleOnCreateTerm: (projectId: string) => void
    handleOnDeleteTerm: (projectId: string, termId: string) => void
    setSearchFilterValue: (value: string) => void
    searchFilterValue: string
}
