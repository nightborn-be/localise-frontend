import React from 'react';
import { IconButton } from '@chakra-ui/react';
import IButtonIconProps from './props';
 
export default function ButtonIcon({
    size,
    hoverBackgroundColor,
    handleOnClick,
    icon,
    ...props
}: IButtonIconProps) {
    // Render
    return (
        <IconButton
            {...props}
            width={size}
            height={size}
            minHeight={'28px'}
            minWidth={'28px'}
            onClick={handleOnClick}
            icon={icon}
            _hover={{ bgColor: hoverBackgroundColor }}
            onM
        />

    );
}
