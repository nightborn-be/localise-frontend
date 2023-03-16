import { ButtonProps } from '@chakra-ui/react';
import React from 'react'
import { ButtonSize } from './types';
export interface IButtonIconProps extends Omit<ButtonProps, "children"> {
    size: ButtonSize,
    children: ((isHovered: boolean) => React.ReactElement) | React.ReactElement 
    hoverBackgroundColor?: string,
    handleOnClick?: () => void,
    backgroundColor?: string,
    border?: string,
    borderRadius?: string
}
