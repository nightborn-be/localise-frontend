import { IconButtonProps } from '@chakra-ui/react';
import React from 'react'
import { ButtonIconState, ButtonSize } from './types';
export default interface IButtonIconProps extends IconButtonProps {
    size: ButtonSize,
    iconComponent: ({ isHovered }: ButtonIconState) => React.ReactElement,
    hoverBackgroundColor?: string,
    handleOnClick?: () => void,
}
