import React, { useState, cloneElement } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import { ISidebarProps } from './props';
import Badge from '../../contents/badge';
const SidebarProject = ({
    textFont,
    textColor,
    text,
    startEnhancer,
    notificationNumber,
    projectIconColor,
    marginLeftText = '0.75rem',
    displayColorBox = true,
    w = '14.25rem',
    h = '2.5rem',
}: ISidebarProps) => {
    //Attributes
    const [isSelected, setIsSelected] = useState<boolean>(false);
    //Function
    const startEnhancerPicker = () => {
        if (startEnhancer)
            if (isSelected)
                return cloneElement(startEnhancer, {
                    fill: COLORS.White.T500.value,
                });
            else return startEnhancer;
        if (displayColorBox)
            return (
                <Box
                    w='0.5rem'
                    h='0.5rem'
                    borderRadius='0.125rem'
                    bg={projectIconColor}
                />
            );

        return null;
    };

    //Render
    return (
        <HStack
            w={w}
            h={h}
            padding='0.75rem'
            borderRadius='0.375rem'
            _hover={{ bg: !isSelected && COLORS.Tag.value }}
            bg={
                isSelected
                    ? COLORS.Localize.Purple.T500.value
                    : COLORS.White.T500.value
            }
            onClick={() => setIsSelected((prev) => !prev)}
        >
            <HStack w='full' h='2rem'>
                {startEnhancerPicker()}
                {text && (
                    <Text
                        marginInlineStart={`${marginLeftText} !important`}
                        font={textFont}
                        color={isSelected ? COLORS.White.T500.value : textColor}
                    >
                        {text}
                    </Text>
                )}
            </HStack>
            {notificationNumber && notificationNumber > 0 && (
                <Badge
                    color={
                        isSelected
                            ? COLORS.Localize.Purple.T600.value
                            : COLORS.Error.T500.value
                    }
                >
                    {notificationNumber}
                </Badge>
            )}
        </HStack>
    );
};

export default SidebarProject;
