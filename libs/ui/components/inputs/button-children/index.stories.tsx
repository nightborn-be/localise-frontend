import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonChildren from '.';

export default {
    title: 'Components/Inputs/ButtonChildren',
    component: ButtonChildren,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ButtonChildren>;

const Template: ComponentStory<typeof ButtonChildren> = (args) => (
    <ButtonChildren {...args} />
);
