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
    marginLeftText = '0.75rem',
    displayColorBox = true,
    w = '14.25rem',
    h = '2.5rem',
}: SidebarProps) {
    //Attributes
    const [isSelected, setIsSelected] = useState<boolean>(false);
    //Function
    const toggleIsSelected = () : void => {
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
                <Box w='0.5rem' h='0.5rem' borderRadius='0.125rem' bg={projectIconColor} />
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
                    w='1.75rem'
                    h='1.125rem'
                    minH='1.125rem'
                    minW='1.75rem'
                    padding='0.125rem'
                    margin='0.6875rem 0.75rem'
                    borderRadius='27.0562rem'
                    bg={
                        isSelected
                            ? COLORS.Localize.Purple.T600.value
                            : COLORS.Error.T500.value
                    }
                    mr='0.3125rem'
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
            padding='0.75rem'
            borderRadius='0.375rem'
            _hover={{ bg: pickHoverBackgroundColor }}
            bg={
                isSelected && !isCheckbox
                    ? COLORS.Localize.Purple.T500.value
                    : COLORS.White.T500.value
            }
            onClick={toggleIsSelected}
        >
            <HStack w='full' h='2rem'>
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
