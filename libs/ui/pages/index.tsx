import React, { useState } from 'react';
import { HomeContentState } from './types';
import OrganisationSettings from './components/organisation-settings';
import { IHomePageProps } from './props';
import ProjectContent from './components/project';

const HomePage = ({
    handleOnDeleteOrganisation,
    handleUpdateOrganisation,
    actualOrganisationUser,
    isLoadingUpdateOrganisation,
    projectTerms,
    activeProject,
    handleOnSaveTranslations,
    handleOnCreateTerm,
}: IHomePageProps) => {
    // Attributes
    const [currentStatePage, setCurrentStatePage] = useState<HomeContentState>(
        HomeContentState.PROJECTS,
    );
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
                    />
                );
        }
    }
    // Render
    return <>{renderPage()}</>;
};

export default HomePage;
