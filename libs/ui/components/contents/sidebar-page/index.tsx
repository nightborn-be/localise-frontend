import React from 'react';
import SideBar from '../../../components/sidebar/index';
import { ISidebarPageProps } from './props';
const SidebarPage = ({
    handleOnCreateProject,
    handleOnCreateOrganisation,
    handleSwitchOrgansiation,
    organisationProjectData,
    organisationUserData,
    actualOrganisationUser,
    setFilterProjectValue,
    filterProjectValue,
    activeProject,
    setActiveProject,
    isLoadingSearchProject,
    clearNewRowTerm,
    setSearchFilterValue,
}: ISidebarPageProps) => {
    // Render
    return (
        <SideBar
            handleOnCreateProject={handleOnCreateProject}
            handleOnCreateOrganisation={handleOnCreateOrganisation}
            handleSwitchOrgansiation={handleSwitchOrgansiation}
            actualOrganisationUser={actualOrganisationUser}
            organisationUserData={organisationUserData}
            organisationProjectData={organisationProjectData}
            filterProjectValue={filterProjectValue}
            setFilterProjectValue={setFilterProjectValue}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            isLoadingSearchProject={isLoadingSearchProject}
            clearNewRowTerm={() => {
                clearNewRowTerm();
            }}
            setSearchFilterValue={setSearchFilterValue}
        />
    );
};
export default SidebarPage;
