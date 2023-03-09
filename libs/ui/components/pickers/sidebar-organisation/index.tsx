import React, { useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import SidebarOrganisationProps from './props';
export default function SidebarOrganisation({
    topTextFont,
    topTextColor,
    topText,
    bottomTextFont,
    bottomTextColor,
    bottomText,
    startEnhancer,
    endEnhancer,
    padding = '0.625rem 0.75rem',
    marginLeftText = '0.75rem',
    canBeSelected = false,
    w = '14.25rem',
    h = '3.25rem',
}: SidebarOrganisationProps) {
    //Attributes
    const [isSelected, setIsSelected] = useState<boolean>(!canBeSelected);
    //Functions
    const toggleIsSelected = () : void => {
        if (canBeSelected) setIsSelected((prev) => !prev);
    };
    //Render
    return (
        <HStack
            w={w}
            h={h}
            padding={padding}
            borderRadius='0.375rem'
            _hover={{ bg: COLORS.Tag.value }}
            bg={COLORS.White.T500.value}
            onClick={toggleIsSelected}
        >
            <HStack w='full' h='2rem'>
                {startEnhancer}
                <VStack marginInlineStart={`${marginLeftText} !important`}>
                    {topText && (
                        <Text font={topTextFont} color={topTextColor}>
                            {topText}
                        </Text>
                    )}

                    {bottomText && (
                        <Text
                            mt='0rem !important'
                            font={bottomTextFont}
                            color={bottomTextColor}
                        >
                            {bottomText}
                        </Text>
                    )}
                </VStack>
            </HStack>
            {isSelected && endEnhancer}
        </HStack>
    );
}
