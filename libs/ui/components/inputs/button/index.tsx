import React from 'react';
import { IconButton } from '@chakra-ui/react';
import IButtonProps from './props';

export default function Button({
    size,
    backgroundColor,
    hoverBackgroundColor,
    border,
    borderRadius,
    handleOnClick,
    text,
    color,
    w,
    h,
    startEnhancer,
    endEnhancer,
    hoverTextColor,
}: IButtonProps) {
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
            _hover={{ bgColor: hoverBackgroundColor }}
        />
    );
}
