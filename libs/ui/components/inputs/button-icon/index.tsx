import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import IButtonIconProps from './props';

export default function ButtonIcon({
    size,
    hoverBackgroundColor,
    handleOnClick,
    children,
    border,
    borderRadius,
    ...props
}: IButtonIconProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    // Render
    return (
        <IconButton
            {...props}
            aria-label=''
            width={size}
            height={size}
            minHeight={'1.75rem'}
            minWidth={'1.75rem'}
            onClick={handleOnClick}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            _hover={{ bgColor: hoverBackgroundColor }}
            border={border}
            borderRadius={borderRadius}
        >
            {children(isHovered)}
        </IconButton>
    );
}
