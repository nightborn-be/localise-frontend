import React from 'react';
import { VStack } from '@chakra-ui/react';
import { IOrganizationMenuProps } from './props';
import { OrganizationMenuItem } from './organization-menu-item';
export default function OrganizationMenu<T>({
    options,
    value,
    onChange,
}: IOrganizationMenuProps<T>) {
    // Functions
    const renderOptions = (): React.ReactNode => {
        return options.map((obj) => (
            <OrganizationMenuItem
                title={obj.title}
                description={obj.description}
                isActive={value === obj.value}
                imageUrl={obj.imageUrl}
                onSelect={() => onChange?.(obj.value as T)}
            />
        ));
    };
    // Render
    return (
        <VStack spacing='4px' alignItems={'left'}>
            {renderOptions()}
        </VStack>
    );
}
