import { useAuthRedirect } from 'ui/auth/auth-redirect';
import ProjectsPage from '../../../../../../libs/ui/pages/dashboard/projects/[id]/index';
import { useRouter } from 'next/router';

const ProjectWeb = () => {
    // Attributes
    useRouter();
    useAuthRedirect();

    // Render
    return <ProjectsPage />;
};
export default ProjectWeb;
