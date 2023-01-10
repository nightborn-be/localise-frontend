import { Stack } from '@chakra-ui/react';
import ProjectHeader from '../header';
import Sidebar from '../sidebar';

const ProjectLayout = () => {
    return (
        <Stack spacing={0} height={'100vh'} w='100%' direction={'row'}>
            <Sidebar />
            <ProjectHeader />
        </Stack>
    );
};

export default ProjectLayout;
