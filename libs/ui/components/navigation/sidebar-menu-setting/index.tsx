import React from 'react';
import { VStack } from '@chakra-ui/react';
import { ISidebarMenuSettingProps } from './props';
import SidebarMenuSettingItem from './sidebar-menu-setting-item';
export default function SidebarMenuSetting<T>({
    options,
    value,
    onChange,
}: ISidebarMenuSettingProps<T>) {
    //Render
    return (
        <>
            <VStack p='2rem 1.25rem 2rem 2rem' spacing='0.5rem' w='14.25rem'>
                {options?.map((option, index) => (
                    <SidebarMenuSettingItem
                        key={index}
                        text={option.title}
                        isSelected={value === option.value}
                        onSelect={() => onChange?.(option.value)}
                        datacy={`sideBarMenuSettingItem_${index}`}
                    />
                ))}
            </VStack>
        </>
    );
}
