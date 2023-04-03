import React, { HStack, VStack } from '@chakra-ui/react';
import SideBar from '../../sidebar';
import { PageProps } from './props';

const Page = ({ children, bg, bgImage, displaySidebar = true }: PageProps) => {
    // Render
    return (
        <HStack justify={'center'} w='100%' h='100vh'>
            {displaySidebar && <SideBar />}
            <VStack
                bg={bg}
                w='100%'
                h='100%'
                spacing={0}
                alignItems='start'
                bgImage={bgImage}
                bgSize='cover'
                justifyContent='center'
            >
                {children}
            </VStack>
        </HStack>
    );
};
export default Page;
