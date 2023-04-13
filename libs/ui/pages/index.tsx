import React, { useState } from 'react';
import { HomeContentState } from './types';
import OrganisationSettings from './components/organisation-settings';
import { IHomePageProps } from './props';
import ProjectContent from './components/project';
import { useHomeLogic } from './logic';

const HomePage = ({
    handleOnDeleteOrganisation,
    handleUpdateOrganisation,
    actualOrganisationUser,
    isLoadingUpdateOrganisation,
    projectTerms,
    activeProject,
    handleOnSaveTranslations,
    handleOnCreateTerm,
    handleOnDeleteTerm,
    setSearchFilterValue,
    searchFilterValue,
    setSortValue,
    sortValue,
    setIsDetectDuplicate,
    isDetectDuplicate,
}: IHomePageProps) => {
    // Attributes
    const { currentStatePage, setCurrentStatePage } = useHomeLogic();
    // Function
    function renderPage(): React.ReactNode {
        switch (currentStatePage) {
            case HomeContentState.ORGANISATION_SETTINGS:
                return (
                    <OrganisationSettings
                        handleOnDeleteOrganisation={handleOnDeleteOrganisation}
                        handleUpdateOrganisation={handleUpdateOrganisation}
                        actualOrganisationUser={actualOrganisationUser}
                        isLoadingUpdateOrganisation={
                            isLoadingUpdateOrganisation
                        }
                    />
                );
            case HomeContentState.PROJECTS:
                return (
                    <ProjectContent
                        projectTerms={projectTerms}
                        activeProject={activeProject}
                        handleOnSaveTranslations={handleOnSaveTranslations}
                        handleOnCreateTerm={handleOnCreateTerm}
                        handleOnDeleteTerm={handleOnDeleteTerm}
                        setSearchFilterValue={setSearchFilterValue}
                        searchFilterValue={searchFilterValue}
                        sortValue={sortValue}
                        setSortValue={setSortValue}
                        setIsDetectDuplicate={setIsDetectDuplicate}
                        isDetectDuplicate={isDetectDuplicate}
                    />
                );
        }
    }
    // Render
    return <>{renderPage()}</>;
};

export default HomePage;
