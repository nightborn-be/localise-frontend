import { IconButtonProps } from '@chakra-ui/react';
import React from 'react'
export default interface IButtonIconProps extends IconButtonProps {
    size: ButtonSize,
    iconComponent: (isHovered: boolean) => React.ReactElement,
    hoverBackgroundColor?: string,
    handleOnClick?: () => void,
}

export enum ButtonSize {
     XXS = "1.5rem", XS = "1.75rem", SMALL = "2rem", REGULAR = "2.25rem", LARGE = "2.5rem", XL = "2.75rem", XXL = "3rem"
}