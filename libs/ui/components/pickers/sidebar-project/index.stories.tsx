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

export const CreateOrganisation = Template.bind({});
CreateOrganisation.args = {
    ...props,
    startEnhancer: (
        <Icon
            name='addSmallBackground'
            color={COLORS.Text.T400.value}
            fill={COLORS.White.T500.value}
            stroke={COLORS.White.T500.value}
        />
    ),
    showNotification: false,
    marginLeftText: '0.5rem',
    w: '15.75rem',
    h: '2.5rem',
    text: 'Create new organization',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    canBeSelected: false,
};

export const SortBy = Template.bind({});
SortBy.args = {
    ...props,
    startEnhancer: <Icon name='sort' />,
    showNotification: false,
    marginLeftText: '0.75rem',
    w: '11.75rem',
    h: '2rem',
    text: 'Name',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    canBeSelected: true,
};
export const SortNone = Template.bind({});
SortNone.args = {
    ...props,
    showNotification: false,
    displayColorBox: false,
    marginLeftText: '0rem',
    w: '11.75rem',
    h: '2rem',
    text: 'None',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    canBeSelected: true,
};

export const SortByName = Template.bind({});
SortByName.args = {
    ...props,
    startEnhancer: <Icon name='sortName' />,
    showNotification: false,
    marginLeftText: '0.75rem',
    w: '11.75rem',
    h: '2rem',
    text: 'Name',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    canBeSelected: true,
};

export const SortByAuthor = Template.bind({});
SortByAuthor.args = {
    ...props,
    startEnhancer: <Icon name='sort' />,
    showNotification: false,
    marginLeftText: '0.75rem',
    w: '11.75rem',
    h: '2rem',
    text: 'Author',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    canBeSelected: true,
};
export const SortByDate = Template.bind({});
SortByDate.args = {
    ...props,
    startEnhancer: <Icon name='date' />,
    showNotification: false,
    marginLeftText: '0.75rem',
    w: '11.75rem',
    h: '2rem',
    text: 'Date',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    canBeSelected: true,
};
export const SortByChecked = Template.bind({});
SortByChecked.args = {
    ...props,
    startEnhancer: <Icon name='unChecked' />,
    showNotification: false,
    isCheckbox: true,
    marginLeftText: '0.75rem',
    w: '11.75rem',
    h: '2rem',
    text: 'Name',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    canBeSelected: true,
};
