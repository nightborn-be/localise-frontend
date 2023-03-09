import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TargetLanguage from '.';

export default {
    title: 'Components/Sidebars/TargetLanguage',
    component: TargetLanguage,
} as ComponentMeta<typeof TargetLanguage>;
const Template: ComponentStory<typeof TargetLanguage> = (
) => <TargetLanguage/>;


export const Project = Template.bind({});
Project.args = { };
