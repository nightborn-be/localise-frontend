import React from 'react';
import Page from 'ui/components/contents/page';
import { useHomeLogic } from './logic';
import SideBar from '../components/sidebar';
import { useSidebarLogic } from '../components/sidebar/logic';

const Dashboard = () => {
    // Attributes
    const {} = useHomeLogic();

    const {
        handleOnCreateProject,
        handleOnCreateOrganisation,
        handleSwitchOrgansiation,
        actualOrganisationUser,
        organisationUserData,
        filterProjectValue,
        setFilterProjectValue,
        setActiveProject,
        createProjectModalDisclosure,
        isDisableOnCloseProjectModal,
        handleToggleIsOrganisationClicked,
        handleOnOptionClick,
        isOrganisationClicked,
        options,
        activeOptionKey,
        setIsOrganisationClicked,
        isLoadingSearchProject,
        handleOnClickProject,
        handleOnUpdateColorProject,
    } = useSidebarLogic();
    // Render
    return (
        <Page>
            <SideBar
                handleToggleIsOrganisationClicked={
                    handleToggleIsOrganisationClicked
                }
                handleOnOptionClick={handleOnOptionClick}
                isOrganisationClicked={isOrganisationClicked}
                options={options}
                activeOptionKey={activeOptionKey}
                setIsOrganisationClicked={setIsOrganisationClicked}
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
                isLoadingSearchProject={isLoadingSearchProject}
                handleOnClickProject={handleOnClickProject}
                handleOnUpdateColorProject={handleOnUpdateColorProject}
            />
        </Page>
    );
};

export default Dashboard;
