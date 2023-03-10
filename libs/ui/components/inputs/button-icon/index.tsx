import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import IButtonIconProps from './props';

export default function ButtonIcon({
    size,
    hoverBackgroundColor,
    handleOnClick,
    displayIcon,
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
            minHeight={'24px'}
            minWidth={'24px'}
            onClick={handleOnClick}
            onMouseOver={updateHoverState}
            onMouseLeave={updateHoverState}
            icon={displayIcon(isHovered)}
            _hover={{ bgColor: hoverBackgroundColor }}
        />
    );
}
