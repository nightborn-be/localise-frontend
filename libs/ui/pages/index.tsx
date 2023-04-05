import React, { useState } from 'react';
import { HomeContentState } from './types';
import OrganisationSettings from './component/organisation-settings';
const HomePage = () => {
    const [currentStatePage, setCurrentStatePage] = useState<HomeContentState>(
        HomeContentState.ORGANISATION_SETTINGS,
    );

    function renderPage(): React.ReactNode {
        switch (currentStatePage) {
            case HomeContentState.ORGANISATION_SETTINGS:
                return <OrganisationSettings />;
        }
    }
    return <>{renderPage()}</>;
};

export default HomePage;
