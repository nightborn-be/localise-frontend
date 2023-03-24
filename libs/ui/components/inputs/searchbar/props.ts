import { InputProps } from '@chakra-ui/react';

export default interface SearchbarProps<T> extends InputProps {
    placeholderColor?: string;
    marginLeftElement?: string;
    spacing?: string;
    values?: SearchBarOption<T>[];
    options?: SearchBarOption<T>[];
    activeKeys?: T[];
    onCheck?: (values: T) => void;
    displayModal?: boolean;
}

export type SearchBarOption<T> = {
    value: T;
    label: string;
};
