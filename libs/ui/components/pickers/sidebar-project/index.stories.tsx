import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Icon from '../../contents/icon';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import SidebarProps from './props';
import SidebarProject from '.';

export default {
    title: 'Components/Sidebars/SidebarProject',
    component: SidebarProject,
} as ComponentMeta<typeof SidebarProject>;
const Template: ComponentStory<typeof SidebarProject> = (
    props: SidebarProps,
) => <SidebarProject {...props} />;

const props: SidebarProps = {
    text: 'Mobile App',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    projectIconColor: '#F74A3E',
    notificationNumber: 1,
};

export const Project = Template.bind({});
Project.args = { ...props };

export const Default = Template.bind({});
Default.args = {
    ...props,
    startEnhancer: <Icon name='section' />,
    text: 'Profile',
};
export const DefaultGray = Template.bind({});
DefaultGray.args = {
    ...props,
    startEnhancer: <Icon name='section' fill={COLORS.InputText.value} />,
    text: 'Profile',
    textColor: COLORS.InputText.value,
};