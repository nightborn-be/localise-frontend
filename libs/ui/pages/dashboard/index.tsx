import React from 'react';
import Page from 'ui/components/contents/page';
import { useDashboardLogic } from './logic';
import SideBar from '../../components/sidebar';
import { useSidebarLogic } from '../../components/sidebar/logic';

const Dashboard = () => {
    // Attributes
    const {
        handleOnCreateProject,
        handleOnCreateOrganisation,
        handleSwitchOrgansiation,
        actualOrganisationUser,
        organisationUserData,
        filterProjectValue,
        setFilterProjectValue,
        activeProject,
        setActiveProject,
        createProjectModalDisclosure,
        isDisableOnCloseProjectModal,
        handleToggleIsOrganisationClicked,
        handleOnOptionClick,
        isOrganisationClicked,
        options,
        activeOptionKey,
        setIsOrganisationClicked,
        handleOnClickProject,
        isLoadingSearchProject,
    } = useSidebarLogic();

    const {} = useDashboardLogic({ createProjectModalDisclosure });
    
    // Render
    return (
        <Page>
            <SideBar
                handleOnCreateProject={handleOnCreateProject}
                handleOnCreateOrganisation={handleOnCreateOrganisation}
                handleSwitchOrgansiation={handleSwitchOrgansiation}
                actualOrganisationUser={actualOrganisationUser}
                organisationUserData={organisationUserData}
                filterProjectValue={filterProjectValue}
                setFilterProjectValue={setFilterProjectValue}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
                createProjectModalDisclosure={createProjectModalDisclosure}
                isDisableOnCloseProjectModal={isDisableOnCloseProjectModal}
                handleToggleIsOrganisationClicked={
                    handleToggleIsOrganisationClicked
                }
                handleOnOptionClick={handleOnOptionClick}
                isOrganisationClicked={isOrganisationClicked}
                options={options}
                activeOptionKey={activeOptionKey}
                setIsOrganisationClicked={setIsOrganisationClicked}
                handleOnClickProject={handleOnClickProject}
                isLoadingSearchProject={isLoadingSearchProject}
            />
        </Page>
    );
};

export default Dashboard;
