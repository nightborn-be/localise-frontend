import { useState } from 'react';
import COLORS from '../../constants/colors';
import { SearchBarOption } from '../inputs/searchbar/props';
import {
    OrgnanisationPagingDTO,
    ProjectPagingDTO,
} from '../../../gateways/resource-api/types/index';
import { useGetProjects } from '../../../gateways/resource-api/projects/projects';
import { useGetOrganisationsForUser } from '../../../gateways/resource-api/organisations/organisations';
import { SidebarLogicType } from './types';

export const useSidebarLogic = (): SidebarLogicType => {
    // Attributes
    const [activeOptionKey, setActiveOptionKey] = useState<string>('');
    const projectsData: ProjectPagingDTO = useGetProjects();
    const options: SearchBarOption<string>[] = [
        {
            label: 'Nightborn',
            value: 'Nightborn',
        },
        {
            label: 'Bloomings Riders',
            value: 'Bloomings Riders',
        },
        {
            label: 'Happy Lifetime',
            value: 'Happy Lifetime',
        },
    ];
    const [activeProjectKey, setActiveProjectKey] = useState<string>('');

    const organisationUserData: OrgnanisationPagingDTO =
        useGetOrganisationsForUser('test');
    const optionsOrganisation = [
        {
            title: 'Nightborn',
            description: '15 members',
            imageUrl: '/assets/images/nightborn.png',
            color: 'transparent',
            value: 0,
        },
        {
            title: 'Bloomings Riders',
            description: '3 members',
            color: COLORS.Bancontact.Blue.value,
            value: 1,
        },
        {
            title: 'Happy Lifetime',
            description: '12 members',
            color: COLORS.Bancontact.Payconiq.value,
            value: 2,
        },
    ];

    const [isOrganisationClicked, setIsOrganisationClicked] =
        useState<boolean>(false);
    const [organizationValue, setOrganizationValue] = useState<string>('');
    const [activeOrganizationKey, setActiveOrganizationKey] = useState(0);

    // Functions
    function handleOnOptionClick(value) {
        setActiveOptionKey(value);
    }
    function handleOnProjectClick(value) {
        //make the call api to get the data of the project
        setActiveProjectKey(value);
    }
    function filter(value: string): SearchBarOption<string>[] {
        return options?.filter((option) => {
            return option.value.toLowerCase().includes(value.toLowerCase());
        });
    }
    function handleToggleIsOrganisationClicked() {
        setIsOrganisationClicked((prev) => !prev);
    }
    function handleOnCreateOrganizationClick() {
        //open modal to create the organziation
        //    setActiveProjectKey(value);
    }
    return {
        handleOnCreateOrganizationClick,
        handleToggleIsOrganisationClicked,
        filter,
        handleOnProjectClick,
        handleOnOptionClick,
        activeOrganizationKey,
        setActiveOrganizationKey,
        organizationValue,
        setOrganizationValue,
        isOrganisationClicked,
        setIsOrganisationClicked,
        optionsOrganisation,
        organisationUserData,
        activeProjectKey,
        setActiveProjectKey,
        options,
        projectsData,
        activeOptionKey,
        setActiveOptionKey,
    };
};
