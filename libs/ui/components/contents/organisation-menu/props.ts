import { ChakraProps } from '@chakra-ui/react';
import { OrganisationDTO } from '../../../../gateways/resource-api/types';
import { OrganisationMenuOption } from './types';

export interface IOrganisationMenuProps<T> {
    options: OrganisationDTO[];
    value?: OrganisationDTO;
    onChange: (value: OrganisationDTO) => void;
    onClick: () => void;
}
