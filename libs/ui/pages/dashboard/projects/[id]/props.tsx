import { OrganisationDTO, ProjectPagingDTO } from 'gateways/resource-api/types';

export interface IProjectContentLogicProps {
    actualOrganisationUser?: OrganisationDTO;
    organisationProjectData?: ProjectPagingDTO;
    refetchActualUserOrganisation: any;
    refecthOrganisationUserData: any;
    refetchUserData: any;
    refetchOrganisationProjectData: any;
}
