import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ColorButton } from '.';
import ColorButtonProps from './props';

export default {
    title: 'Components/Sidebars/ColorButton',
    component: ColorButton,
} as ComponentMeta<typeof ColorButton>;
const Template: ComponentStory<typeof ColorButton> = (
    props: ColorButtonProps,
) => <ColorButton {...props} />;

