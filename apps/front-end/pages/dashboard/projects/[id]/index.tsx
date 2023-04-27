import { useAuthRedirect } from 'ui/auth/auth-redirect';
import ProjectsPage from '../../../../../../libs/ui/pages/dashboard/projects/[id]/index';
import { useRouter } from 'next/router';
const ProjectWeb = () => {
    useRouter();
    useAuthRedirect();
    return <ProjectsPage />;
};
export default ProjectWeb;
