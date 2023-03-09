import React, { useState  } from 'react';
import { Box } from '@chakra-ui/react';
import Icon from '../../../contents/icon';
import ColorButtonProps from './props';

export const ColorButton = ({ color, isSelected, setCurrentSelectedColor } : ColorButtonProps) => {
    //Attributes
    const [isHovered, setIsHovered] = useState(false);
    
    //Functions
    const opacityValue = () : string=> {
        if (isSelected) return '1';
        if (isHovered) return '0.5';
        return '0';
    };
    //Render
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
            onClick={() => setCurrentSelectedColor(color)}
        >
            <Icon
                pointerEvents='none'
                name={'checkedColor'}
                opacity={opacityValue()}
            />
        </Box>
    );
};
