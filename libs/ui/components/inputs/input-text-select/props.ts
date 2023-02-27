import { InputProps } from '@chakra-ui/react';
import React from 'react'
import IInputSelectProps from '../input-select/props';
import IInputProps from '../input/props';
export default interface IInputSelectAndInputProps extends InputProps {
    selectProps: IInputSelectProps
    inputProps: IInputProps
    label?: string,
    description?: string,
    labelColor?: string,
    descriptionColor?: string,
    w?: string,
    h?: string,
    border?: string,
    borderRadius?: string,
}

export type Options = {
    value: string,
    label: string,
}