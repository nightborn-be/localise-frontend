import { IDefaultForm, IForm } from '../../../../utils/formik';
import { ICreateProjectForm } from '../../../components/sidebar/create-project-modal/types';
import { ICreateOrganisationForm } from '../../../components/sidebar/create-organisation-modal/types';
import { OrganisationDTO } from '../../../../gateways/resource-api/types/organisationDTO';
import { ProjectPagingDTO } from '../../../../gateways/resource-api/types/projectPagingDTO';
import { ProjectDTO } from '../../../../gateways/resource-api/types/projectDTO';
import { OrgnanisationPagingDTO } from '../../../../gateways/resource-api/types/orgnanisationPagingDTO';
export interface ISidebarPageProps {
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
    createProjectModalDisclosure: any
    isDisableOnCloseProjectModal: boolean;
}
