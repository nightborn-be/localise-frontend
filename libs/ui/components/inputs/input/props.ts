import { IconButtonProps, InputProps } from '@chakra-ui/react';
import React from 'react'
export default interface IInputProps extends InputProps {
    type?: React.HTMLInputTypeAttribute;
    color?: string,
    border?: string,
    labelPrimary?: string,
    labelSecondary?: string,
    placeholder: string,
    placeholderColor?: string,
    h: string,
    w: string,
    readOnly?: boolean,
}

