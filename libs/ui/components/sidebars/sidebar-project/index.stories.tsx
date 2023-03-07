import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import React from 'react';
import Icon from '../../contents/icon';
import Text from '../../contents/text';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import SidebarProps from './props';
import SidebarProject from '.';
import { Box, Image, VStack } from '@chakra-ui/react';
import Button from '../../inputs/button';
import IButtonProps, { EnhancerProps } from '../../inputs/button/props';

export default {
    title: 'Components/Sidebars/SidebarProject',
    component: SidebarProject,
} as ComponentMeta<typeof SidebarProject>;
const Template: ComponentStory<typeof SidebarProject> = (
    props: SidebarProps,
) => <Input {...props} />;

const props: SidebarProps = {
    topText: 'Mobile App',
    topTextFont: FONTS.T1.T12px.Medium500.value,
    topTextColor: COLORS.Text.T400.value,
    projectIconColor: '#F74A3E',
    notificationNumber: 1,
};

export const Project = Template.bind({});
Project.args = { ...props };

export const Default = Template.bind({});
Default.args = {
    ...props,
    startEnhancer: <Icon name='section' />,
    topText: 'Profile',
};
export const DefaultGray = Template.bind({});
DefaultGray.args = {
    ...props,
    startEnhancer: <Icon name='section' fill={COLORS.InputText.value} />,
    topText: 'Profile',
    topTextColor: COLORS.InputText.value,
};

export const ActualOrganisation = Template.bind({});
ActualOrganisation.args = {
    ...props,
    startEnhancer: (
        <Image src='/assets/images/nightbornOrganisation.png' alt='nightborn' />
    ),
    w: '228px',
    h: '52px',
    topText: 'Organisation',
    topTextFont: FONTS.T1.T10px.Regular400.value,
    topTextColor: COLORS.InputText.value,
    bottomText: 'NightBorn',
    bottomTextFont: FONTS.T1.T12px.Medium500.value,
    bottomTextColor: COLORS.Text.T400.value,
    endEnhancer: <Icon name='editorialArrow' />,
    canBeSelected: false,
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
    marginLeftText: '8px',
    w: '228px',
    h: '40px',
    topText: 'Create new organization',
    topTextFont: FONTS.T1.T12px.Medium500.value,
    topTextColor: COLORS.Text.T400.value,
    canBeSelected: false,
};

export const SortBy = Template.bind({});
SortBy.args = {
    ...props,
    startEnhancer: <Icon name='sort' />,
    showNotification: false,
    marginLeftText: '12px',
    w: '188px',
    h: '32px',
    topText: 'Name',
    topTextFont: FONTS.T1.T12px.Medium500.value,
    topTextColor: COLORS.Text.T400.value,
    canBeSelected: true,
};

export const SortByChecked = Template.bind({});
SortByChecked.args = {
    ...props,
    startEnhancer: <Icon name='sort' />,
    showNotification: false,
    marginLeftText: '12px',
    w: '188px',
    h: '32px',
    topText: 'Name',
    topTextFont: FONTS.T1.T12px.Medium500.value,
    topTextColor: COLORS.Text.T400.value,
    canBeSelected: true,
};
