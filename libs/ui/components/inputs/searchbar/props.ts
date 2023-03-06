import { InputProps } from '@chakra-ui/react';
export default interface SearchbarProps extends InputProps {
    placeholderColor?: string,
    marginLeftElement?: string,
}

export type Options = {
    value: string,
    label: string,
    color: string,
}
