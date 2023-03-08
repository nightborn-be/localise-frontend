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
    w = '228px',
    h = '40px',
    marginLeftText = '12px',
}: SidebarMenuSettingProps) {
    //Attributes
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    //Function
    const toggleIsSelected = () => setIsSelected((prev) => !prev);
    const boxBackgroundColor = () => {
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
                borderRadius='1px 4px 4px 1px'
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
                    w='2px'
                    h='full'
                    borderRadius='4px 4px 4px 4px'
                    bg={boxBackgroundColor()}
                />
                <HStack
                    w='full'
                    h='32px'
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
