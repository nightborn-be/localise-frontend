import { InputProps } from '@chakra-ui/react';
export default interface SearchbarProps<T> extends InputProps {
    placeholderColor?: string,
    marginLeftElement?: string,
    spacing?: string,
    values?: Options<T>[]
    options?: Options<T>[]
    activeKeys?: T[]
    onCheck?: (values: T) => void
}

export type Options<T> = {
    value: T,
    label: string,
    isActive: boolean
}