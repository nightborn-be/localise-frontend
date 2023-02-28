import { InputProps } from '@chakra-ui/react';
import React from 'react'
export default interface IInputSelectProps extends InputProps {
    label?: string,
    description?: string,
    labelColor?: string,
    descriptionColor?: string,
    isValid?: boolean,
    errorBorder?: string,
    placeholderColor?: string,
    options?: Array<Options>
    dropdownArrowColor?: string,
    backgroundOptionColor?: string,
    dropDownIndicator?: React.ReactElement,
    isSearchable?: boolean,
    menuOptionWidth?: string,
    focusBackgroundOptionColor?: string,
    borderRadiusOption?: string,
    selectedOptionColor?: string,
    textOptionColor?: string,
}

export type Options = {
    value: string,
    label: string,
}