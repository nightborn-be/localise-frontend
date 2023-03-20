import { InputProps } from '@chakra-ui/react';
import { SearchBarOption } from '../searchbar/props';

export default interface ISearchbarSelectProps<T> extends InputProps {
    placeholderColor?: string,
    marginLeftElement?: string,
    activeKey?: T,
    filterValue?: string,
    spacing?: string,
    options?: SearchBarOption<T>[],
    onSelect?: (value) => void,
    defaultSelectValue?: string,
}