import { useRouter } from 'next/router';
import Dashboard from '../../../../libs/ui/pages/dashboard/index';
import { useAuthRedirect } from 'ui/auth/auth-redirect';

const DashboardWeb = () => {
    // Attributes
    useRouter();
    useAuthRedirect();

    // Render
    return <Dashboard />;
};
export default DashboardWeb;
