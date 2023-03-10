import { IconButtonProps } from '@chakra-ui/react';
import React from 'react'
export default interface IButtonIconProps extends IconButtonProps {
    size: ButtonSize,
    displayIcon: (isHovered: boolean) => React.ReactElement,
    hoverBackgroundColor?: string,
    handleOnClick?: () => void,
}

export enum ButtonSize {
    XXS = "24px", XS = "28px", SMALL = "32px", REGULAR = "36px", LARGE = "40px", XL = "44px", XXL = "48px"
}