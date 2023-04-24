import React from 'react';
import SideBar from '../../../components/sidebar/index';
import { useSidebarPageLogic } from './logic';
const SidebarPage = () => {
    const {
        handleOnCreateProject,
        handleOnCreateOrganisation,
        handleSwitchOrgansiation,
        actualOrganisationUser,
        organisationUserData,
        organisationProjectData,
        filterProjectValue,
        setFilterProjectValue,
        activeProject,
        setActiveProject,
    } = useSidebarPageLogic();
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
        />
    );
};
export default SidebarPage;
