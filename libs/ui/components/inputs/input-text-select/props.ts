import { InputProps } from '@chakra-ui/react';
import React from 'react';
import { IFieldForm } from '../../../../utils/formik';
import { IInputSelectProps } from '../input-select/props';
import { IInputProps } from '../input/props';
export interface IInputSelectAndInputProps<T> extends InputProps {
    selectProps: IInputSelectProps;
    inputProps: IInputProps<T>;
    label?: string;
    description?: string;
    border?: string;
    isValid?: boolean;
    errorBorder?: string;
    rightIcon?: React.ReactElement;
    rightHoverIcon?: React.ReactElement;
    menuOptionWidth?: string;
    menuRightOption?: string;
    menuMinWOption?: string;
    onDelete: () => void;
    index: number
}
