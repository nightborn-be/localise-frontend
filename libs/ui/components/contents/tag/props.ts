import { ChakraProps } from '@chakra-ui/react';
import { Font } from '../../../constants/fonts';
export interface ITagProps<T> extends ChakraProps {
    font?: Font,
    value: T,
    color?: string,
    onDelete?: () => void
}

