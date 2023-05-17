import { InputProps } from '@chakra-ui/react';

export default interface SearchbarProps<T> extends InputProps {
    placeholderColor?: string;
    marginLeftElement?: string;
    spacing?: string;
    values?: T[];
    options?: SearchBarOption<T>[];
    activeKeys?: T[];
    onCheck?: (values: T) => void;
    displayModal?: boolean;
    noValueMsg?: string;
    datacy?: string;
}

export type SearchBarOption<T> = {
    value: T;
    label: string;
};
