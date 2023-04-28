import { useRouter } from 'next/router';
import Dashboard from '../../../../libs/ui/pages/dashboard/index';
const DashboardWeb = () => {
    useRouter();
    return <Dashboard />;
};
export default DashboardWeb;
