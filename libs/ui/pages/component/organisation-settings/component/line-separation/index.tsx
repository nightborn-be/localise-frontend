import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import COLORS from '../../../../../constants/colors';
const LineSeparation = () => {
    return (
        <VStack
            padding={'2.5rem 2rem 2.5rem 1.25rem'}
            spacing='1.25rem'
            justifyContent={'center'}
            alignItems='center'
            w='full'
        >
            <Box w={'full'} height={'0.0625rem'} bg={COLORS.Line.value} />
        </VStack>
    );
};

export default LineSeparation;
