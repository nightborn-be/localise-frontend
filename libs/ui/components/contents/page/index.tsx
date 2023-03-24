import React, { HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import { PageProps } from './props';

const Page = ({ children, bg, bgImage }: PageProps) => {
    // Render

    return (
        <HStack justify={'center'} w='100%' h='100vh'>
            <VStack
                bg={bg}
                w='100%'
                h='100%'
                spacing={0}
                alignItems={'start'}
                bgImage={bgImage}
                bgSize={'cover'}
                justifyContent={'center'}
            >
                {children}
            </VStack>
        </HStack>
    );
};
export default Page;
