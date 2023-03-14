import { ChakraProps } from '@chakra-ui/react';
import { Option } from './types';

export interface IOrganizationMenuProps<T> extends ChakraProps {
    options: Array<Option<T>>,
    value: T
    onChange: (value: T) => void
}