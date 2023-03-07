import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Toggle from '.';
import ToggleProps from './props';

export default {
    title: 'Components/Sidebars/Toggle',
    component: Toggle,
} as ComponentMeta<typeof Toggle>;
const Template: ComponentStory<typeof Toggle> = (props: ToggleProps) => (
    <Toggle {...props} />
);

const props: ToggleProps = {
    topText: 'Mobile App',
    topTextFont: FONTS.T1.T12px.Medium500.value,
    topTextColor: COLORS.Text.T400.value,
    projectIconColor: '#F74A3E',
    notificationNumber: 1,
};

export const Project = Template.bind({});
Project.args = { ...props };
