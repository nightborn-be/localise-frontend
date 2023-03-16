import { InputProps } from '@chakra-ui/react';
export interface ISearchBoxProps<T> extends InputProps {
    title?: string,
    description?: string,
    tags?: T[]
}
