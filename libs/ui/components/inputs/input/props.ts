import { InputProps } from '@chakra-ui/react';
import React from 'react'
import { Font } from '../../../constants/fonts';
export default interface IInputProps extends InputProps {
    type?: React.HTMLInputTypeAttribute;
    color?: string,
    font?: Font,
    border?: string,
    label?: string,
    description?: string,
    labelColor?: string,
    descriptionColor?: string,
    placeholder: string,
    placeholderColor?: string,
    h: string,
    w: string,
    readOnly?: boolean,
    errorBorder?: string
    hoverBorder?: string
    isValid?: boolean,
    rightElement?: JSX.Element
}
