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
    options: SearchBarColorOption<string>[];
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
    refetchActualUserOrganisation?: any;
    refecthOrganisationUserData?: any;
    refetchUserData?: any;
    refetchOrganisationProjectData?: any;
    createProjectModalDisclosure: any;
    isDisableOnCloseProjectModal: boolean;
    handleOnClickProject: (
        option: SearchBarColorOption<string>,
        clearNewRowTerm?: () => void,
    ) => void;
    isLoadingSearchProject: boolean;
    handleOnUpdateColorProject: (iconColor: string) => void;
}

export type SearchBarColorOption<T> = {
    value: T;
    label: string;
    iconColor: string;
};
