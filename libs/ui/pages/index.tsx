import React from 'react';
import Page from 'ui/components/contents/page';
import { useHomeLogic } from './logic';
import { useSidebarPageLogic } from 'ui/components/contents/sidebar-page/logic';
import SidebarPage from 'ui/components/contents/sidebar-page';

const HomePage = () => {
    // Attributes
    const {
        handleOnDeleteOrganisation,
        handleUpdateOrganisation,
        isLoadingUpdateOrganisation,
        projectTerms,
        handleOnSaveTranslations,
        handleOnCreateTerm,
        handleOnDeleteTerm,
        setSearchFilterValue,
        searchFilterValue,
        setSortValue,
        sortValue,
        setIsDetectDuplicate,
        isDetectDuplicate,
        setCurrentStatePage,
        currentStatePage,
        newRowTerm,
        setNewRowTerm,
        clearNewRowTerm,
        addNewRowTerm,
        handleOnDeleteProject,
        handleOnUpdateProject,
    } = useHomeLogic();

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
            {/* <HomePage
                handleOnCreateTerm={handleOnCreateTerm}
                handleOnDeleteOrganisation={handleOnDeleteOrganisation}
                handleUpdateOrganisation={handleUpdateOrganisation}
                handleOnSaveTranslations={handleOnSaveTranslations}
                handleOnDeleteTerm={handleOnDeleteTerm}
                actualOrganisationUser={actualOrganisationUser}
                isLoadingUpdateOrganisation={isLoadingUpdateOrganisation}
                projectTerms={projectTerms}
                activeProject={activeProject}
                setSearchFilterValue={setSearchFilterValue}
                searchFilterValue={searchFilterValue}
                setSortValue={setSortValue}
                sortValue={sortValue}
                setIsDetectDuplicate={setIsDetectDuplicate}
                isDetectDuplicate={isDetectDuplicate}
                currentStatePage={currentStatePage}
                newRowTerm={newRowTerm}
                setNewRowTerm={setNewRowTerm}
                clearNewRowTerm={clearNewRowTerm}
                addNewRowTerm={addNewRowTerm}
                handleOnUpdateProject={handleOnUpdateProject}
                handleOnDeleteProject={handleOnDeleteProject}
            /> */}
        </Page>
    );
};

export default HomePage;
