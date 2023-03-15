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
    // Render
    return (
        <IconButton
            {...props}
            width={size}
            height={size}
            minHeight={'1.5rem'}
            minWidth={'1.5rem'}
            onClick={handleOnClick}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            icon={iconComponent(isHovered)}
            _hover={{ bgColor: hoverBackgroundColor }}
        />
    );
}
