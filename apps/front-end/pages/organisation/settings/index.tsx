import OrganisationSettingsPage from '../../../../../libs/ui/pages/organisation/settings/index';
import SidebarPage from '../../../../../libs/ui/pages/components/sidebar-page/index';
import { HStack } from '@chakra-ui/react';
import Page from 'ui/components/contents/page';

const OrganisationSettingsWeb = () => {
    return (
        <Page>
            <SidebarPage />
            <OrganisationSettingsPage />;
        </Page>
    );
};

export default OrganisationSettingsWeb;
