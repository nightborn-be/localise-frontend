import { useAuthRedirect } from 'ui/auth/auth-redirect';
import OrganisationSettingsPage from '../../../../../libs/ui/pages/dashboard/settings/index';
import { useRouter } from 'next/router';

const OrganisationSettingsWeb = () => {
    useRouter();
    useAuthRedirect();
    return <OrganisationSettingsPage />;
};

export default OrganisationSettingsWeb;
