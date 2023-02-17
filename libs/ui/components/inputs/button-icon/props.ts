import { IconButtonProps } from '@chakra-ui/react';
import React from 'react'
export default interface IButtonIconProps extends IconButtonProps {
    size: ButtonSize,
    icon: React.ReactElement,
    hoverBackgroundColor?: string,
    handleOnClick?: () => void,
    onMouseOver?: () => void,
    onMouseLeave?: () => void,
}

export enum ButtonSize {
    XS = "28px", SMALL = "32px", REGULAR = "36px", LARGE = "40px", XL = "44px"
}