import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ProjectColorPicker from '.';
import ProjectColorPickerProps from './props';

export default {
    title: 'Components/Sidebars/ProjectColorPicker',
    component: ProjectColorPicker,
} as ComponentMeta<typeof ProjectColorPicker>;
const Template: ComponentStory<typeof ProjectColorPicker> = (
    props: ProjectColorPickerProps,
) => <ProjectColorPicker {...props} />;

const props: ProjectColorPickerProps = {};

export const Project = Template.bind({});
Project.args = { ...props };
