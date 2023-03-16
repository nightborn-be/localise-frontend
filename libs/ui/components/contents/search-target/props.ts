import { InputProps } from '@chakra-ui/react';
export interface ISearchTargetProps<T> extends InputProps {
    title?: string,
    description?: string,
    tags?: T[]
}
