import React from 'react'
import { IFieldForm } from '../../../../utils/formik';
import { Font } from '../../../constants/fonts';
export default interface IInputProps<T> extends IFieldForm<T> {
    type?: React.HTMLInputTypeAttribute;
    color?: string,
    font?: Font,
    border?: string,
    label?: string,
    description?: string,
    placeholder: string,
    placeholderColor?: string,
    h?: string,
    maxWidth?: string
    w?: string,
    readOnly?: boolean,
    errorBorder?: string
    hoverBorder?: string
    borderRadius?: string
    isValid?: boolean,
    rightElement?: JSX.Element
    alignItems?: string,
    paddingRight?: string,
    focusBorderColor?: string,
    marginTop?: string,
    padding?: string,
    gap?: string,
    zIndex?: string,
    margin?: string,
}
