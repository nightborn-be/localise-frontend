import { InputProps } from '@chakra-ui/react';
export default interface ISearchbarSelectProps<T> extends InputProps {
    placeholderColor?: string,
    marginLeftElement?: string,
    activeKey?: T,
    filterValue?: string,
    spacing?: string,
    options?: Options<T>[]
    onSelect?: (value) => void
}

export type Options<T> = {
    value: T,
    label: string,
}