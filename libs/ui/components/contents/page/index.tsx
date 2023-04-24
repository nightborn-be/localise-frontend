import React, { HStack, VStack } from '@chakra-ui/react';
import SideBar from '../../sidebar';
import { PageProps } from './props';
const Page = ({ children, bg, bgImage }: PageProps) => {
    // Render
    return (
        <HStack
            justify={'center'}
            w='100%'
            h='100vh'
            overflowY='hidden'
            spacing={'0'}
            overflowX={'hidden'}
        >
            <HStack
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
            </HStack>
        </HStack>
    );
};
export default Page;
