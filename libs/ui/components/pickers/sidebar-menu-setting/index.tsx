import React from 'react';
import { VStack } from '@chakra-ui/react';
import SidebarMenuSettingProps from './props';
import SidebarMenuSettingItem from './sidebar-menu-setting-item';
export default function SidebarMenuSetting<T>({
    options,
    value,
    onChange,
}: SidebarMenuSettingProps<T>) {
    //Render
    return (
        <>
            <VStack p='2rem 1.25rem 2rem 2rem' spacing='0.5rem' w='14.25rem'>
                {options?.map((obj) => (
                    <SidebarMenuSettingItem
                        text={obj.title}
                        isSelected={value === obj.value}
                        onSelect={() => onChange?.(obj.value as T)}
                    />
                ))}
            </VStack>
        </>
    );
}
