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
    createProjectModalDisclosure,
    isDisableOnCloseProjectModal,
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
            createProjectModalDisclosure={createProjectModalDisclosure}
            isDisableOnCloseProjectModal={isDisableOnCloseProjectModal}
        />
    );
};
export default SidebarPage;
