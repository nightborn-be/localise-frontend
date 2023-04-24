import React from 'react';
import { useOrganisationSettingsPageLogic } from './logic';
import Page from 'ui/components/contents/page';
import { useSidebarPageLogic } from 'ui/components/contents/sidebar-page/logic';
import SidebarPage from 'ui/components/contents/sidebar-page';
import OrganisationSettings from '../../../components/contents/organisation-settings/index';

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
        organisationProjectData,
        filterProjectValue,
        setFilterProjectValue,
        activeProject,
        setActiveProject,
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
