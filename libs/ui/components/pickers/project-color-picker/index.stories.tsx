import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import ProjectColorPicker from '.';
import { IProjectColorPickerProps } from './props';
import SHADOWS from '../../../constants/shadows';

export default {
    title: 'Components/Sidebars/ProjectColorPicker',
    component: ProjectColorPicker,
} as ComponentMeta<typeof ProjectColorPicker>;
const Template: ComponentStory<typeof ProjectColorPicker> = (
    props: IProjectColorPickerProps,
) => {
    const [currentSelectedColor, setCurrentSelectedColor] =
        useState<string>('');

    return (
        <ProjectColorPicker
            {...props}
            boxShadow={SHADOWS.Menu.value}
            selected={currentSelectedColor}
            onSelect={setCurrentSelectedColor}
        />
    );
};

export const Project = Template.bind({});
