import { InputProps } from '@chakra-ui/react';
import React from 'react'
import IInputSelectProps from '../input-select/props';
import IInputProps from '../input/props';
export default interface IInputSelectAndInputProps<T> extends InputProps {
    selectProps: IInputSelectProps
    inputProps: IInputProps<T>
    label?: string,
    description?: string,
    border?: string,
    isValid?: boolean,
    errorBorder?: string,
    rightIcon?: React.ReactElement,
    rightHoverIcon?: React.ReactElement,
}