import React, { useState } from 'react';
import { HomeContentState } from './types';
import OrganisationSettings from './components/organisation-settings';
import { IHomePageProps } from './props';

const HomePage = ({
    handleOnDeleteOrganisation,
    handleUpdateOrganisation,
    actualOrganisationUser,
    isLoadingUpdateOrganisation,
}: IHomePageProps) => {
    // Attributes
    const [currentStatePage, setCurrentStatePage] = useState<HomeContentState>(
        HomeContentState.ORGANISATION_SETTINGS,
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
        }
    }
    // Render
    return <>{renderPage()}</>;
};

export default HomePage;
