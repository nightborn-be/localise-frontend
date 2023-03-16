import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ColorPicker from '.';
import { IColorPickerProps } from './props';

export default {
    title: 'Components/Sidebars/ColorPicker',
    component: ColorPicker,
} as ComponentMeta<typeof ColorPicker>;
const Template: ComponentStory<typeof ColorPicker> = (
    props: IColorPickerProps,
) => <ColorPicker {...props} />;
