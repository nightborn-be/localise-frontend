import { ChakraProps } from '@chakra-ui/react';
import React from 'react'
export default interface IButtonIconProps extends ChakraProps {
    size: ButtonSize,
    backgroundColor?: string,
    border?: string,
    borderRadius?: string,
    icon: React.ReactElement,
    hoverBackgroundColor?: string,
    handleOnClick?: () => void,
}

export enum ButtonSize {
    XS = "28px", SMALL = "32px", REGULAR = "36px", LARGE = "40px", XL = "44px"
}