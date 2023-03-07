import React, { useState, cloneElement } from 'react';
import IInputProps from './props';
import { Box, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import SidebarProps from './props';
export default function SidebarProject({
    topTextFont,
    topTextColor,
    topText,
    bottomTextFont,
    bottomTextColor,
    bottomText,
    startEnhancer,
    endEnhancer,
    notificationNumber,
    projectIconColor,
    showNotification = true,
    canBeSelected = true,
    marginLeftText = '12px',
    w = '228px',
    h = '40px',
}: SidebarProps) {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const toggleIsSelected = () => {
        if (canBeSelected) setIsSelected((prev) => !prev);
    };
    const startEnhancerPicker = () => {
        if (startEnhancer)
            if (isSelected)
                return cloneElement(startEnhancer, {
                    fill: COLORS.White.T500.value,
                });
            else return startEnhancer;
        return <Box w='8px' h='8px' borderRadius='2px' bg={projectIconColor} />;
    };
    const endEnhancerPicker = () => {
        if (endEnhancer) return endEnhancer;
        if (showNotification)
            return (
                <VStack
                    w='28px'
                    h='18px'
                    minH='18px'
                    minW='28px'
                    padding='2px'
                    margin='11px 12px'
                    borderRadius='432.9px'
                    bg={
                        isSelected
                            ? COLORS.Localize.Purple.T600.value
                            : COLORS.Error.T500.value
                    }
                    mr='5px'
                    justifyContent={'center'}
                    alignItems='center'
                >
                    <Text
                        font={FONTS.T1.T12px.Medium500.value}
                        color={COLORS.White.T500.value}
                    >
                        {notificationNumber}
                    </Text>
                </VStack>
            );
    };
    return (
        <HStack
            w={w}
            h={h}
            padding='12px'
            borderRadius='6px'
            _hover={{ bg: !isSelected && COLORS.Tag.value }}
            bg={
                isSelected
                    ? COLORS.Localize.Purple.T500.value
                    : COLORS.White.T500.value
            }
            onClick={toggleIsSelected}
        >
            <HStack w='full' h='32px'>
                {startEnhancerPicker()}
                <VStack marginInlineStart={`${marginLeftText} !important`}>
                    {topText && (
                        <Text
                            font={topTextFont}
                            color={
                                isSelected
                                    ? COLORS.White.T500.value
                                    : topTextColor
                            }
                        >
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
            {endEnhancerPicker()}
        </HStack>
    );
}
