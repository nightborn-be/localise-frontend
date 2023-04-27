import React from 'react';
import Page from 'ui/components/contents/page';
import { useSidebarPageLogic } from 'ui/components/contents/sidebar-page/logic';
import SidebarPage from 'ui/components/contents/sidebar-page';
import { useDashboardLogic } from './logic';

const Dashboard = () => {
    // Attributes
    const {} = useDashboardLogic();

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
        createProjectModalDisclosure,
        isDisableOnCloseProjectModal,
    } = useSidebarPageLogic();
    // Render
    return (
        <Page>
            <SidebarPage
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
        </Page>
    );
};

export default Dashboard;
