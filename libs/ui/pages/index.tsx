import React, { useState } from 'react';
import { HomeContentState } from './types';
import OrganisationSettings from './component/organisation-settings';
const HomePage = () => {
    // Attributes
    const [currentStatePage, setCurrentStatePage] = useState<HomeContentState>(
        HomeContentState.ORGANISATION_SETTINGS,
    );
    // Function
    function renderPage(): React.ReactNode {
        switch (currentStatePage) {
            case HomeContentState.ORGANISATION_SETTINGS:
                return <OrganisationSettings />;
        }
    }
    // Render
    return <>{renderPage()}</>;
};

export default HomePage;
