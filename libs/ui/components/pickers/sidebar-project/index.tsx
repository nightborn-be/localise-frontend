import React, { useState, cloneElement, useRef } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import { ISidebarProps } from './props';
import Badge from '../../contents/badge';
import Button from '../../inputs/button';
import ProjectColorPicker from '../project-color-picker';
import useOnClickOutside from '../../../../utils/hooks';
import SHADOWS from '../../../constants/shadows';
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
    activeKey,
    onClick,
}: ISidebarProps) => {
    // Attributes
    const isSelected = activeKey === text;
    const [currentSelectedColor, setCurrentSelectedColor] = useState<string>(
        projectIconColor ?? '',
    );
    const [isColorPickerVisible, setIsColorPickerVisible] =
        useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, () => setIsColorPickerVisible(false));

    // Functions
    const startEnhancerPicker = () => {
        if (startEnhancer)
            if (isSelected)
                return cloneElement(startEnhancer, {
                    fill: COLORS.White.T500.value,
                });
            else return startEnhancer;
        if (displayColorBox)
            return (
                <Button
                    w='0.5rem'
                    h='0.5rem'
                    padding='0'
                    minW='0.5rem'
                    minH='0.5rem'
                    borderRadius='0.125rem'
                    bg={currentSelectedColor}
                    onClick={() => setIsColorPickerVisible(true)}
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
            cursor={'pointer'}
            onClick={() => onClick(text)}
            ref={ref}
        >
            <HStack w='full' h='2rem' position={'relative'}>
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
                <HStack
                    position={'absolute'}
                    maxW={w}
                    top='18px'
                    right='25px'
                    display={isColorPickerVisible ? 'visible' : 'none'}
                    zIndex='2'
                >
                    <ProjectColorPicker
                        boxShadow={SHADOWS.Menu.value}
                        selected={currentSelectedColor}
                        onSelect={setCurrentSelectedColor}
                    />
                </HStack>
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
