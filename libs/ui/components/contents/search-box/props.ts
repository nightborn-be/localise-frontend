import { InputProps } from '@chakra-ui/react';
import { SearchBarOption } from '../../inputs/searchbar/props';

export interface ISearchBoxProps<T> extends InputProps {
    title?: string;
    description?: string;
    onCheck?: (value: T) => void;
    activeKeys?: T[];
    options?: SearchBarOption<T>[];
    noValueMsg?: string;
    onTagDelete: (value: T) => void;
}
