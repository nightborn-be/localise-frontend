import { InputProps } from '@chakra-ui/react';
import { Options } from '../../inputs/searchbar/props';
export interface ISearchBoxProps<T> extends InputProps {
    title?: string,
    description?: string,
    onCheck?: (value: T) => void
    activeKeys?: T[]
    options?: Options<T>[]
}
