import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Icon from '../../../contents/icon';
import { IColorPickerProps } from './props';

const ColorPicker = ({
    size = '0.875rem',
    borderRadius = '0.25rem',
    color,
    isSelected,
    onSelect,
    widthIcon,
    heightIcon,
    ...props
}: IColorPickerProps) => {
    // Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // Functions
    function opacityValue(): string {
        if (isSelected) return '1';
        if (isHovered) return '0.5';
        return '0';
    }
    // Render
    return (
        <Box
            w={size}
            h={size}
            display='flex'
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor={color}
            borderRadius={borderRadius}
            marginInlineStart='0rem !important'
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onSelect(color)}
            cursor={'pointer'}
            {...props}
        >
            <Icon
                pointerEvents='none'
                name={'checkedColor'}
                opacity={opacityValue()}
                width={widthIcon}
                height={heightIcon}
            />
        </Box>
    );
};
export default ColorPicker;
