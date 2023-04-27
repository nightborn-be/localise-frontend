import { useState } from 'react';
import { SearchBarOption } from '../inputs/searchbar/props';
import { SidebarLogicType } from './types';
import { ISidebarLogicProps } from './props';
import { useRouter } from 'next/router';
import { ProjectDTO } from 'gateways/resource-api/types';

export const useSidebarLogic = ({
    organisationProjectData,
}: ISidebarLogicProps): SidebarLogicType => {
    // Attributes
    const [activeOptionKey, setActiveOptionKey] = useState<string>('');
    const { push } = useRouter()
    const [isOrganisationClicked, setIsOrganisationClicked] =
        useState<boolean>(false);

    // Functions
    function handleOnOptionClick(value: string) {
        setActiveOptionKey(value);
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

    function handleOnClickProject(option: SearchBarOption<string>,
        clearNewRowTerm: () => void,
        setSearchFilterValue: (value: string) => void,
        activeProject: ProjectDTO,
        setActiveProject: (value: ProjectDTO) => void,) {
        if (
            activeProject.id != option.value
        ) {
            setActiveProject({
                id: option.value,
                name: option.label,
            });
            clearNewRowTerm();
            setSearchFilterValue('');
            push(
                `/projects/${option.value}`,
            );
        }
    }
    return {
        handleToggleIsOrganisationClicked,
        handleOnOptionClick,
        isOrganisationClicked,
        setIsOrganisationClicked,
        options,
        activeOptionKey,
        setActiveOptionKey,
        handleOnClickProject,
    };
}
