import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import SidebarMenuSetting from '.';
import SidebarMenuSettingProps from './props';
import { MenuItemValue } from './types';

export default {
    title: 'Components/Sidebars/SidebarMenuSetting',
    component: SidebarMenuSetting,
} as ComponentMeta<typeof SidebarMenuSetting>;
const Template: ComponentStory<
    typeof SidebarMenuSetting<MenuItemValue>
> = ({}: SidebarMenuSettingProps<MenuItemValue>) => {
    const [activeKey, setActiveKey] = useState(MenuItemValue.INFORMATION);
    return (
        <SidebarMenuSetting
            options={[
                { title: 'Information', value: MenuItemValue.INFORMATION },
                { title: 'Projet color', value: MenuItemValue.PROJET_COLOR },
                {
                    title: 'Source language',
                    value: MenuItemValue.SOURCE_LANGUAGE,
                },
                {
                    title: 'Target languages',
                    value: MenuItemValue.TARGET_LANGUAGES,
                },
            ]}
            value={activeKey}
            onChange={(value) => setActiveKey(value)}
        />
    );
};

export const MenuSetting = Template.bind({});
