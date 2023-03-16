import React from 'react';
import { VStack } from '@chakra-ui/react';
import { IOrganisationMenuProps } from './props';
import { OrganisationMenuItem } from './organisation-menu-item';
export default function OrganisationMenu<T>({
    options,
    value,
    onChange,
}: IOrganisationMenuProps<T>) {
    // Render
    return (
        <VStack spacing='4px' alignItems={'left'}>
            {options.map((option, index) => (
                <OrganisationMenuItem
                    title={option.title}
                    key={index}
                    description={option.description}
                    isActive={value === option.value}
                    imageUrl={option.imageUrl}
                    onSelect={() => onChange?.(option.value)}
                />
            ))}
            ;
        </VStack>
    );
}
