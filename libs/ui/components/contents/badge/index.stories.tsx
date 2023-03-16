import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Badge from '.';
import COLORS from '../../../constants/colors';
import { IBadgeProps } from './props';

export default {
    title: 'Components/Contents/Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>;
const Template: ComponentStory<typeof Badge> = (props: IBadgeProps) => {
    return <Badge {...props}>1</Badge>;
};

export const BadgeNotification = Template.bind({});
BadgeNotification.args = {
    color: COLORS.Error.T500.value,
};

export const BadgeNotificationSelected = Template.bind({});
BadgeNotificationSelected.args = {
    color: COLORS.Localize.Purple.T600.value,
};
