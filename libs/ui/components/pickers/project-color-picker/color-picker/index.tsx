import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Icon from '../../../contents/icon';
import { IColorPickerProps } from './props';

export const ColorPicker = ({
    color,
    isSelected,
    onSelect,
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
            w='0.875rem'
            h='0.875rem'
            display='flex'
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor={color}
            borderRadius={'0.25rem'}
            marginInlineStart='0rem !important'
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onSelect(color)}
        >
            <Icon
                pointerEvents='none'
                name={'checkedColor'}
                opacity={opacityValue()}
            />
        </Box>
    );
};
