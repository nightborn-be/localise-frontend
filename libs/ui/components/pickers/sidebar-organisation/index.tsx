import React from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import { ISidebarOrganisationProps } from './props';
const SidebarOrganisation = ({
    topTextFont,
    topTextColor,
    topText,
    bottomTextFont,
    bottomTextColor,
    bottomText,
    startEnhancer,
    endEnhancer,
    color,
    padding = '0.625rem 0.75rem',
    w = '14.25rem',
    h = '3.25rem',
    onClick,
}: ISidebarOrganisationProps) => {
    //Render
    return (
        <HStack
            w={w}
            h={h}
            padding={padding}
            borderRadius='0.375rem'
            _hover={{ bg: COLORS.Tag.value }}
            bg={COLORS.White.T500.value}
            onClick={onClick}
        >
            <HStack w='full' h='2rem'>
                <Box
                    borderRadius='0.5rem'
                    bg={!startEnhancer ? color : 'transparent'}
                    w={'2rem'}
                    h={'2rem'}
                >
                    {startEnhancer}
                </Box>
                <VStack spacing={'0rem'} alignItems='left'>
                    {topText && (
                        <Text font={topTextFont} color={topTextColor}>
                            {topText}
                        </Text>
                    )}

                    {bottomText && (
                        <Text font={bottomTextFont} color={bottomTextColor}>
                            {bottomText}
                        </Text>
                    )}
                </VStack>
            </HStack>
            {endEnhancer}
        </HStack>
    );
};
export default SidebarOrganisation;
