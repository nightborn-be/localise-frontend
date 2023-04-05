import { useState } from 'react';
import COLORS from '../../constants/colors';
import { SearchBarOption } from '../inputs/searchbar/props';
import {
    OrganisationDTO,
    OrgnanisationPagingDTO,
    ProjectPagingDTO,
} from '../../../gateways/resource-api/types/index';
import { useGetMe } from '../../../gateways/resource-api/users/users';
import { useGetProjects } from '../../../gateways/resource-api/projects/projects';
import {
    useGetOrganisation,
    useGetOrganisationsForUser,
    useSwitchUserOrganisation,
} from '../../../gateways/resource-api/organisations/organisations';
import { SidebarLogicType } from './types';

export const useSidebarLogic = (): SidebarLogicType => {
    // Attributes
    const [activeOptionKey, setActiveOptionKey] = useState<string>('');
    // const projectsData: ProjectPagingDTO = useGetProjects();
    const [activeProjectKey, setActiveProjectKey] = useState<string>('');
    const [isOrganisationClicked, setIsOrganisationClicked] =
        useState<boolean>(false);
    // Hooks
    const { mutateAsync: switchUserOrganisation } = useSwitchUserOrganisation();
    const { data: userData, refetch: refetchUserData } = useGetMe();
    const {
        data: actualOrganisationUser,
        refetch: refetchActualUserOrganisation,
    } = useGetOrganisation(userData?.organisationId as string);
    const { data: organisationUserData, refetch: refecthOrganisationUserData } =
        useGetOrganisationsForUser(userData?.userId as string);
    const { data: organisationProjectData } = useGetProjects(
        actualOrganisationUser?.id as string,
    );
    // Functions
    function handleOnOptionClick(value: string) {
        setActiveOptionKey(value);
    }
    function handleOnProjectClick(value: string) {
        //make the call api to get the data of the project
        setActiveProjectKey(value);
    }
    const options: SearchBarOption<string>[] = organisationProjectData?.data
        ? organisationProjectData?.data?.map((project) => ({
              label: project.name as string,
              value: project.id as string,
          }))
        : [];
    function filter(value: string): SearchBarOption<string>[] {
        return options?.filter((option) => {
            return option.label.toLowerCase().includes(value.toLowerCase());
        });
    }
    function handleToggleIsOrganisationClicked() {
        setIsOrganisationClicked((prev) => !prev);
    }
    function handleOnCreateOrganizationClick() {
        //open modal to create the organziation
        //    setActiveProjectKey(value);
    }

    function handleOnCreateProject() {}

    // Function
    function getInitialeName() {
        const arraySplit = actualOrganisationUser?.name?.split(' ');
        let inital = '';
        arraySplit?.map((obj) => {
            inital += obj.charAt(0);
        });
        return inital;
    }

    function switchOrgansiation(organisation: OrganisationDTO) {
        switchUserOrganisation(
            {
                userId: userData?.userId as string,
                data: { organisationId: organisation.id as string },
            },
            {
                onSuccess: () => {
                    refetchUserData();
                    setIsOrganisationClicked(false);
                },
            },
        );
    }
    return {
        handleOnCreateOrganizationClick,
        handleToggleIsOrganisationClicked,
        filter,
        handleOnProjectClick,
        handleOnOptionClick,
        isOrganisationClicked,
        setIsOrganisationClicked,
        organisationUserData,
        activeProjectKey,
        setActiveProjectKey,
        options,
        // projectsData,
        activeOptionKey,
        setActiveOptionKey,
        handleOnCreateProject,
        getInitialeName,
        actualOrganisationUser,
        switchOrgansiation,
    };
};
