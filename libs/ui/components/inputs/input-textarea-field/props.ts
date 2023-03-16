import React from 'react'
import { IFieldForm } from '../../../../utils/formik';
import { Font } from '../../../constants/fonts';
export interface IInputTextAreaFieldProps<T> extends IFieldForm<T> {
    color?: string,
    font?: Font,
    border?: string,
    placeholder: string,
    placeholderColor?: string,
    h?: string,
    w?: string,
    maxWidth?: string
    hoverBorder?: string
    borderRadius?: string
    rightElement?: JSX.Element
    paddingRight?: string,
    padding?: string,
    gap?: string,
}
