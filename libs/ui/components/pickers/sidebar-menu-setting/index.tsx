import React, { useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import SidebarMenuSettingProps from './props';
export default function SidebarMenuSetting({
    textFont,
    textColor,
    text,
    hoverBackgroundColor = COLORS.Tag.value,
    w = '14.25rem',
    h = '2.5rem',
    marginLeftText = '0.75rem',
}: SidebarMenuSettingProps) {
    //Attributes
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    //Functions
    const toggleIsSelected = () => setIsSelected((prev) => !prev);
    const boxBackgroundColor = () : string => {
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
                onClick={toggleIsSelected}
            >
                <Box
                    w='0.125rem'
                    h='full'
                    borderRadius='0.25rem 0.25rem 0.25rem 0.25rem'
                    bg={boxBackgroundColor()}
                />
                <HStack
                    w='full'
                    h='2rem'
                    marginInlineStart={`${marginLeftText} !important`}
                >
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
