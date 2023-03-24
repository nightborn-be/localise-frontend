import { ChakraProps } from '@chakra-ui/react';
import { OrganisationMenuOption } from './types';

export interface IOrganisationMenuProps<T> {
    options: OrganisationMenuOption<T>[];
    value: T;
    onChange: (value: T) => void;
}
