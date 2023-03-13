import { ButtonProps, IconButtonProps } from '@chakra-ui/react';
import React from 'react'
export default interface IButtonIconProps extends Omit<ButtonProps, "children"> {
    size: ButtonSize,
    children: (isHovered: boolean) => React.ReactNode,
    hoverBackgroundColor?: string,
    handleOnClick?: () => void,
    backgroundColor?: string,
    border?: string,
    borderRadius?: string
}

export enum ButtonSize {
    XS = "1.75rem", SMALL = "2rem", REGULAR = "2.25rem", LARGE = "2.5rem", XL = "2.75rem", XXL = "3rem"
}