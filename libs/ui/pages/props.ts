import { IDefaultForm, IForm } from 'utils/formik';
import { IOrganisationSettingsForm } from './components/organisation-settings/types';
import {
    OrganisationDTO,
    OrgnanisationPagingDTO,
    ProjectDTO,
    TermDTO,
} from 'gateways/resource-api/types';
import { TermPagingDTO } from '../../gateways/resource-api/types/termPagingDTO';
import { ITableRowTermForm } from './components/project/components/glossary/components/table-row-term/types';
import { HomeContentState } from './types';
import { IUpdateProjectForm } from './components/project/components/settings/types';

export interface IHomePageProps {
    handleOnDeleteOrganisation: () => void;
    handleUpdateOrganisation: (
        form: IForm<IOrganisationSettingsForm> & IDefaultForm,
    ) => void;
    handleOnSaveTranslations: (
        form: IForm<ITableRowTermForm> & IDefaultForm,
    ) => void;
    handleOnUpdateProject: (
        form: IForm<IUpdateProjectForm> & IDefaultForm,
    ) => void;
    handleOnDeleteProject: () => void,
    isLoadingUpdateOrganisation: boolean;
    actualOrganisationUser?: OrganisationDTO;
    organisationUserData?: OrgnanisationPagingDTO;
    projectTerms?: TermPagingDTO;
    activeProject?: ProjectDTO;
    handleOnCreateTerm: (projectId: string) => void;
    handleOnDeleteTerm: (projectId: string, termId: string) => void;
    setSearchFilterValue: (value: string) => void;
    searchFilterValue: string;
    setSortValue: (value: string) => void;
    sortValue: string;
    setIsDetectDuplicate: (value: boolean) => void;
    isDetectDuplicate: boolean;
    currentStatePage?: HomeContentState;
    newRowTerm: TermDTO[]
    setNewRowTerm: (value: TermDTO[]) => void,
    clearNewRowTerm: () => void,
    addNewRowTerm: (term: TermDTO) => void
}
