import { InputProps } from '@chakra-ui/react';
import React from 'react'
import IInputSelectProps from '../input-select/props';
export default interface SearchbarProps extends InputProps {
    placeholderColor?: string,
    options?: Array<Options>
    isSearchable?: boolean,
    marginLeftElement?: string,
    selectProps?: IInputSelectProps,
}

export type Options = {
    value: string,
    label: string,
    color: string,
}


export enum state {
    ISHOVERED, ISSELECTED, NONE
}