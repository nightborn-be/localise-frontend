import { useState } from 'react';
import { SearchBarOption } from '../inputs/searchbar/props';
import { SidebarLogicType } from './types';
import { ISidebarLogicProps } from './props';
import { useRouter } from 'next/router';

export const useSidebarLogic = ({
    organisationProjectData,
}: ISidebarLogicProps): SidebarLogicType => {
    // Attributes
    const [activeOptionKey, setActiveOptionKey] = useState<string>('');
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

    return {
        handleToggleIsOrganisationClicked,
        handleOnOptionClick,
        isOrganisationClicked,
        setIsOrganisationClicked,
        options,
        activeOptionKey,
        setActiveOptionKey,
    };
};
