import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import IButtonIconProps from './props';

export default function ButtonIcon({
    size,
    hoverBackgroundColor,
    handleOnClick,
    iconComponent,
    ...props
}: IButtonIconProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const updateHoverState = () => setIsHovered((prev) => !prev);
    // Render
    return (
        <IconButton
            {...props}
            width={size}
            height={size}
            minHeight={'28px'}
            minWidth={'28px'}
            onClick={handleOnClick}
            onMouseOver={updateHoverState}
            onMouseLeave={updateHoverState}
            icon={iconComponent(isHovered)}
            _hover={{ bgColor: hoverBackgroundColor }}
        />
    );
}
