import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IDropzoneProps } from '../dropzone/props';
import Dropzone from '../dropzone';
export default {
    title: 'Components/Contents/Dropzone',
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (props: IDropzoneProps) => (
    <Dropzone {...props} />
);

export const Default = Template.bind({});
