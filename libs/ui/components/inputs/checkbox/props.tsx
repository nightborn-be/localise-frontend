import { CheckboxProps } from '@chakra-ui/react';

export interface ICheckBoxProps extends CheckboxProps {
    isSelected?: boolean;
    label?: string;
    onSelect?: (value: any) => void;
    datacy?: string;
}
