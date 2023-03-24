import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
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
                {startEnhancer}
                <VStack spacing={'0rem'}>
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
