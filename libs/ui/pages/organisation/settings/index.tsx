import React from 'react';
import { useOrganisationSettingsPageLogic } from './logic';
import OrganisationSettings from 'ui/pages/components/organisation-settings';

const OrganisationSettingsPage = () => {
    const {
        handleOnDeleteOrganisation,
        handleUpdateOrganisation,
        actualOrganisationUser,
        isLoadingUpdateOrganisation,
    } = useOrganisationSettingsPageLogic();
    return (
        <OrganisationSettings
            handleOnDeleteOrganisation={handleOnDeleteOrganisation}
            handleUpdateOrganisation={handleUpdateOrganisation}
            actualOrganisationUser={actualOrganisationUser}
            isLoadingUpdateOrganisation={isLoadingUpdateOrganisation}
        />
    );
};

export default OrganisationSettingsPage;
