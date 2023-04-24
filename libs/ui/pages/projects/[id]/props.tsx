import {
    OrganisationDTO,
    ProjectDTO,
    ProjectPagingDTO,
} from 'gateways/resource-api/types';

export interface IProjectContentLogicProps {
    activeProject: ProjectDTO;
    setActiveProject: (value: ProjectDTO) => void;
    actualOrganisationUser?: OrganisationDTO;
    organisationProjectData?: ProjectPagingDTO;
    refetchActualUserOrganisation: any;
    refecthOrganisationUserData: any;
    refetchUserData: any;
    refetchOrganisationProjectData: any;
    id?: string | string[];
}
