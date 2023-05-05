import { InputProps } from '@chakra-ui/react';
import { SearchBarOption } from '../searchbar/props';
import { Font } from '../../../constants/fonts';

export default interface ISearchbarSelectProps<T>
    extends Omit<InputProps, 'onSelect'> {
    placeholderColor?: string;
    marginLeftElement?: string;
    activeKey?: T;
    filterValue?: string;
    spacing?: string;
    options?: SearchBarOption<T>[];
    onSelect?: (value: string) => void;
    defaultSelectValue?: string;
    label?: string;
    description?: string;
    noValueMsg?: string;
    labelFont?: Font;
}
