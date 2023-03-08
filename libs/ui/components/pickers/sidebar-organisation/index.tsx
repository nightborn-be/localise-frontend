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
    padding = '10px 12px',
    marginLeftText = '12px',
    canBeSelected = false,
    w = '228px',
    h = '52px',
}: SidebarOrganisationProps) {
    //Attributes
    const [isSelected, setIsSelected] = useState<boolean>(!canBeSelected);
    //Functions
    const toggleIsSelected = () => {
        if (canBeSelected) setIsSelected((prev) => !prev);
    };
    //Render
    return (
        <HStack
            w={w}
            h={h}
            padding={padding}
            borderRadius='6px'
            _hover={{ bg: COLORS.Tag.value }}
            bg={COLORS.White.T500.value}
            onClick={toggleIsSelected}
        >
            <HStack w='full' h='32px'>
                {startEnhancer}
                <VStack marginInlineStart={`${marginLeftText} !important`}>
                    {topText && (
                        <Text font={topTextFont} color={topTextColor}>
                            {topText}
                        </Text>
                    )}

                    {bottomText && (
                        <Text
                            mt='0px !important'
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
