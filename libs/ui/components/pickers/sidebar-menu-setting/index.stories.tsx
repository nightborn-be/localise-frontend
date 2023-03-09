import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import SidebarMenuSetting from '.';
import SidebarMenuSettingProps from './props';

export default {
    title: 'Components/Sidebars/SidebarMenuSetting',
    component: SidebarMenuSetting,
} as ComponentMeta<typeof SidebarMenuSetting>;
const Template: ComponentStory<typeof SidebarMenuSetting> = (
    props: SidebarMenuSettingProps,
) => <SidebarMenuSetting {...props} />;

const props: SidebarMenuSettingProps = {
    text: 'Informations',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    w: '11rem',
    h: '2rem',
};

export const MenuSetting = Template.bind({});
MenuSetting.args = { ...props };
