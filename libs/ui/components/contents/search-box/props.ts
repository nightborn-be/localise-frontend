import { InputProps } from '@chakra-ui/react';
import { SearchBarOption } from '../../inputs/searchbar/props';
import { Font } from '../../../constants/fonts';

export interface ISearchBoxProps<T> extends InputProps {
    title?: string;
    description?: string;
    onCheck?: (value: T) => void;
    activeKeys?: T[];
    options?: SearchBarOption<T>[];
    noValueMsg?: string;
    onTagDelete: (value: T) => void;
    labelFont?: Font;
    datacy?: string;
}
