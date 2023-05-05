import React from 'react';
import { useOrganisationSettingsPageLogic } from './logic';
import Page from 'ui/components/contents/page';
import OrganisationSettings from '../../../components/contents/organisation-settings/index';
import SideBar from '../../../components/sidebar/index';
import { useSidebarLogic } from '../../../components/sidebar/logic';

const OrganisationSettingsPage = () => {
    // Attributes
    const {
        handleOnDeleteOrganisation,
        handleUpdateOrganisation,
        isLoadingUpdateOrganisation,
    } = useOrganisationSettingsPageLogic();
    const {
        handleOnCreateProject,
        handleOnCreateOrganisation,
        handleSwitchOrgansiation,
        actualOrganisationUser,
        organisationUserData,
        filterProjectValue,
        setFilterProjectValue,
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
                createProjectModalDisclosure={createProjectModalDisclosure}
                handleOnCreateProject={handleOnCreateProject}
                handleOnCreateOrganisation={handleOnCreateOrganisation}
                handleSwitchOrgansiation={handleSwitchOrgansiation}
                actualOrganisationUser={actualOrganisationUser}
                organisationUserData={organisationUserData}
                filterProjectValue={filterProjectValue}
                setFilterProjectValue={setFilterProjectValue}
                isDisableOnCloseProjectModal={isDisableOnCloseProjectModal}
                isLoadingSearchProject={isLoadingSearchProject}
                handleOnClickProject={handleOnClickProject}
                handleOnUpdateColorProject={handleOnUpdateColorProject}
            />
            <OrganisationSettings
                handleOnDeleteOrganisation={handleOnDeleteOrganisation}
                handleUpdateOrganisation={handleUpdateOrganisation}
                actualOrganisationUser={actualOrganisationUser}
                isLoadingUpdateOrganisation={isLoadingUpdateOrganisation}
            />
        </Page>
    );
};

export default OrganisationSettingsPage;
