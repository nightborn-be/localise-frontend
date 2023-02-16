import React from 'react';
import { IconButton } from '@chakra-ui/react';
import IButtonIconProps from './props';

export default function ButtonIcon({
    size,
    backgroundColor,
    hoverBackgroundColor,
    border,
    borderRadius,
    handleOnClick,
    icon,
}: IButtonIconProps) {
    // Render
    return (
        <IconButton
            aria-label='icon button'
            backgroundColor={backgroundColor}
            border={border}
            borderRadius={borderRadius}
            width={size}
            height={size}
            minHeight={'28px'}
            minWidth={'28px'}
            onClick={handleOnClick}
            icon={icon}
            _hover={{ bgColor: hoverBackgroundColor }}
        />
    );
}
