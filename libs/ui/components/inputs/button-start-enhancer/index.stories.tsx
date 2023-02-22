import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonStartEnhancer from '.';

export default {
    title: 'Components/Inputs/ButtonStartEnhancer',
    component: ButtonStartEnhancer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ButtonStartEnhancer>;

const Template: ComponentStory<typeof ButtonStartEnhancer> = (args) => (
    <ButtonStartEnhancer {...args} />
);
