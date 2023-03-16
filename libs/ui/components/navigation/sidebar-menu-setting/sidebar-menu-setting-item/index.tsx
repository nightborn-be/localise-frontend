import React, { useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import COLORS from '../../../../constants/colors';
import Text from '../../../contents/text';
import { ISidebarMenuSettingItemProps } from './props';
import FONTS from '../../../../constants/fonts';
export default function SidebarMenuSettingItem({
    text,
    hoverBackgroundColor = COLORS.Tag.value,
    textFont = FONTS.T1.T12px.Medium500.value,
    textColor = COLORS.Text.T400.value,
    w = '11rem',
    h = '2rem',
    isSelected,
    onSelect,
}: ISidebarMenuSettingItemProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    //Functions
    const boxBackgroundColor = (): string => {
        if (isSelected) {
            return COLORS.Localize.Purple.T500.value;
        }
        if (isHovered) {
            return COLORS.Line.value;
        }
        return 'transparent';
    };
    //Render
    return (
        <>
            <HStack
                borderRadius='0.0625rem 0.25rem 0.25rem 0.0625rem'
                w={w}
                h={h}
                _hover={{
                    bg: isSelected
                        ? COLORS.Communication.BG.value
                        : hoverBackgroundColor,
                }}
                bg={
                    isSelected
                        ? COLORS.Communication.BG.value
                        : COLORS.White.T500.value
                }
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onSelect}
                spacing='14px'
            >
                <Box
                    w='0.125rem'
                    h='full'
                    borderRadius='0.25rem 0.25rem 0.25rem 0.25rem'
                    bg={boxBackgroundColor()}
                />
                <HStack w='full' h='2rem'>
                    {text && (
                        <Text font={textFont} color={textColor}>
                            {text}
                        </Text>
                    )}
                </HStack>
            </HStack>
        </>
    );
}
