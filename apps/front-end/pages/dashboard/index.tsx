import { useRouter } from 'next/router';
import Dashboard from '../../../../libs/ui/pages/dashboard/index';
import { useAuthRedirect } from 'ui/auth/auth-redirect';
const DashboardWeb = () => {
    useRouter();
    useAuthRedirect();
    return <Dashboard />;
};
export default DashboardWeb;
