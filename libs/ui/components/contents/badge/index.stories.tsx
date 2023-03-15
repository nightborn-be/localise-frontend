import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import COLORS from '../../../constants/colors';
import Toggle from '.';
import ToggleProps from './props';
import Badge from '.';
import IBadgeProps from './props';

export default {
    title: 'Components/Contents/Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>;
const Template: ComponentStory<typeof Badge> = (props: IBadgeProps) => {
    return <Toggle {...props} />;
};

export const BadgeNotification = Template.bind({});
BadgeNotification.args = { isSelected: false, notificationNumber: 1 };

export const BadgeNotificationSelected = Template.bind({});
BadgeNotificationSelected.args = {
    isSelected: true,
    notificationNumber: 1,
};
