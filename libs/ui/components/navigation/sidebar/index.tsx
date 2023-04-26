import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import SidebarHeader from './header';
import COLORS from '../../../constants/colors';

const Sidebar = ({ projects }: any) => {
    return (
        <Box w='15.3125rem' borderRight={`1px solid ${COLORS.Line.value}`}>
            <SidebarHeader />
            <Stack
                px={'0.5rem'}
                py='0.375rem'
                direction='column'
                spacing='0.75rem'
            >
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
            bg={COLORS.Localize.Purple.T500.value}
            p={'0.7813rem'}
            direction={'row'}
            spacing='0.75rem'
        >
            <Box
                borderRadius={'0.125rem'}
                w={'0.5rem'}
                h={'0.5rem'}
                bg={'green'}
            />
            <Text fontSize={'0.75rem'} fontWeight={'500'} color='white'>
                {project.name}
            </Text>
        </Stack>
    );
};

export default Sidebar;
