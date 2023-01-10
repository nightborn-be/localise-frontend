import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import SidebarHeader from './header';

const Sidebar = ({ projects }: any) => {
    return (
        <Box w='245px' borderRight={'1px solid #E7E9F4'}>
            <SidebarHeader />
            <Stack px={'8px'} py='6px' direction='column' spacing='12px'>
                {projects?.data?.map((project: any) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </Stack>
        </Box>
    );
};

const ProjectCard = ({ project }: any) => {
    return (
        <Stack
            alignItems={'center'}
            borderRadius={6}
            bg={'#5F43E2'}
            p={'12.5px'}
            direction={'row'}
            spacing='12px'
        >
            <Box borderRadius={'2px'} w={'8px'} h={'8px'} bg={'green'} />
            <Text fontSize={'12px'} fontWeight={'500'} color='white'>
                {project.name}
            </Text>
        </Stack>
    );
};

export default Sidebar;
