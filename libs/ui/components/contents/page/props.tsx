import { ReactNode } from 'react';
import { IDefaultForm, IForm } from 'utils/formik';
import { ICreateProjectForm } from 'ui/components/sidebar/create-project-modal/types';
import { ICreateOrganisationForm } from 'ui/components/sidebar/create-organisation-modal/types';
import {
    OrganisationDTO,
    OrgnanisationPagingDTO,
    ProjectPagingDTO,
} from 'gateways/resource-api/types';

export interface PageProps {
    children: ReactNode | ReactNode[];
    bg?: string;
    bgImage?: string;
    displaySidebar?: boolean;
    handleOnCreateProject?: (
        form: IForm<ICreateProjectForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleOnCreateOrganisation?: (
        form: IForm<ICreateOrganisationForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleSwitchOrgansiation?: (
        organisation: OrganisationDTO,
        setIsOrganisationClicked: (value: boolean) => void,
    ) => void;
    organisationProjectData?: ProjectPagingDTO | undefined;
    actualOrganisationUser?: OrganisationDTO;
    organisationUserData?: OrgnanisationPagingDTO;
    setFilterProjectValue?: (value: string) => void;
    filterProjectValue?: string;
}
