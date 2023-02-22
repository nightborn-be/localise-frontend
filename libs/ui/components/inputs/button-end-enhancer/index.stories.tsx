import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ButtonEndEnhancer from '.';

export default {
    title: 'Components/Inputs/ButtonEndEnhancer',
    component: ButtonEndEnhancer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ButtonEndEnhancer>;

const Template: ComponentStory<typeof ButtonEndEnhancer> = (args) => (
    <ButtonEndEnhancer {...args} />
);
