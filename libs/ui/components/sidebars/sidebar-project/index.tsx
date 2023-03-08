import React, { useState, cloneElement } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import SidebarProps from './props';
import Icon from '../../contents/icon';
export default function SidebarProject({
    textFont,
    textColor,
    text,
    startEnhancer,
    endEnhancer,
    notificationNumber,
    projectIconColor,
    showNotification = true,
    canBeSelected = true,
    isCheckbox = false,
    marginLeftText = '12px',
    displayColorBox = true,
    w = '228px',
    h = '40px',
}: SidebarProps) {
    //Attributes
    const [isSelected, setIsSelected] = useState<boolean>(false);
    //Function
    const toggleIsSelected = () => {
        if (canBeSelected) setIsSelected((prev) => !prev);
    };
    const startEnhancerPicker = () => {
        if (startEnhancer)
            if (isSelected)
                if (isCheckbox) return <Icon name='checkboxChecked' />;
                else
                    return cloneElement(startEnhancer, {
                        fill: COLORS.White.T500.value,
                    });
            else return startEnhancer;
        if (displayColorBox)
            return (
                <Box w='8px' h='8px' borderRadius='2px' bg={projectIconColor} />
            );

        return null;
    };

    const pickHoverBackgroundColor = () => {
        if (isCheckbox && isSelected) return COLORS.Tag.value;
        if (!isSelected) return COLORS.Tag.value;
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
    //Render
    return (
        <HStack
            w={w}
            h={h}
            padding='12px'
            borderRadius='6px'
            _hover={{ bg: pickHoverBackgroundColor }}
            bg={
                isSelected && !isCheckbox
                    ? COLORS.Localize.Purple.T500.value
                    : COLORS.White.T500.value
            }
            onClick={toggleIsSelected}
        >
            <HStack w='full' h='32px'>
                {startEnhancerPicker()}
                {text && (
                    <Text
                        marginInlineStart={`${marginLeftText} !important`}
                        font={textFont}
                        color={
                            isSelected && !isCheckbox
                                ? COLORS.White.T500.value
                                : textColor
                        }
                    >
                        {text}
                    </Text>
                )}
            </HStack>
            {endEnhancerPicker()}
        </HStack>
    );
}
