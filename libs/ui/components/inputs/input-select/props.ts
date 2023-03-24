import { InputProps } from '@chakra-ui/react';
import React from 'react'
import { Font } from '../../../constants/fonts';

export interface IInputSelectProps extends Omit<InputProps, 'onChange'> {
    label?: string,
    description?: string,
    isValid?: boolean,
    errorBorder?: string,
    placeholderColor?: string,
    options?: Array<Options>
    dropdownArrowColor?: string,
    backgroundOptionColor?: string,
    dropdownIndicator?: React.ReactElement,
    isSearchable?: boolean,
    menuOptionWidth?: string,
    focusBackgroundOptionColor?: string,
    borderRadiusOption?: string,
    selectedOptionColor?: string,
    textOptionColor?: string,
    menuRightOption?: string,
    menuLeftOption?: string,
    selectMarginLeft?: string,
    isMultiple?: boolean,
    font?: Font;
    paddingContainer?: string;
    onChange?: (value) => void;
}

export type Options = {
    value: string;
    label: string;
    icon?: React.ReactElement;
};
