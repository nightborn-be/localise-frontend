import { useState } from 'react';
import { SearchBarOption } from '../inputs/searchbar/props';

import { SidebarLogicType } from './types';
import { ISidebarLogicProps } from './props';

export const useSidebarLogic = ({
    organisationProjectData,
}: ISidebarLogicProps): SidebarLogicType => {
    // Attributes
    const [activeOptionKey, setActiveOptionKey] = useState<string>('');
    // const projectsData: ProjectPagingDTO = useGetProjects();
    const [activeProjectKey, setActiveProjectKey] = useState<string>('');
    const [isOrganisationClicked, setIsOrganisationClicked] =
        useState<boolean>(false);

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

    function handleToggleIsOrganisationClicked() {
        setIsOrganisationClicked((prev) => !prev);
    }
    function handleOnCreateOrganizationClick() {
        //open modal to create the organziation
        //    setActiveProjectKey(value);
    }

    function handleOnCreateProject() {}

    // Function
    return {
        handleOnCreateOrganizationClick,
        handleToggleIsOrganisationClicked,
        handleOnProjectClick,
        handleOnOptionClick,
        isOrganisationClicked,
        setIsOrganisationClicked,
        activeProjectKey,
        setActiveProjectKey,
        options,
        activeOptionKey,
        setActiveOptionKey,
        handleOnCreateProject,
    };
};
