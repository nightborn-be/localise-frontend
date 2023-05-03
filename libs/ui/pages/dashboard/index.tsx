import React from 'react';
import Page from 'ui/components/contents/page';
import { useDashboardLogic } from './logic';
import SideBar from '../../components/sidebar';
import { useSidebarLogic } from '../../components/sidebar/logic';

const Dashboard = () => {
    // Attributes
    const {} = useDashboardLogic();

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
        handleOnUpdateColorProject,
    } = useSidebarLogic();
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
                handleOnUpdateColorProject={handleOnUpdateColorProject}
            />
        </Page>
    );
};

export default Dashboard;
