import ProjectLayout from '@components/navigation/layout';
import { useGetProjects } from 'src/services/projects/projects';

export default function Home() {
    // Attributes
    const { data: projects } = useGetProjects(
        '2a510101-7a88-4ac7-83a7-c5662434f564',
    );

    // Render
    return <ProjectLayout projects={projects} />;
}
