import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
    title: 'Components/Inputs/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary button',
    variant: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary button',
    variant: "secondary"
};