import { InputProps } from '@chakra-ui/react';
import React from 'react'
export default interface IInputSelectProps extends InputProps {
    label?: string,
    description?: string,
    labelColor?: string,
    descriptionColor?: string,
    icon: React.ReactElement,
    isInvalid?: boolean,
    errorBorder?: string,
    placeholderColor?: string,
    options?: Array<Options>
    dropdownArrowColor?: string,
    backgroundOptionColor?: string
}

export type Options = {
    value: string,
    label: string,
    icon?: React.ReactElement
}