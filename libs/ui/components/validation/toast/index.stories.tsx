import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast from '.';
import { IToastProps } from './props';

export default {
    title: 'Validation/Toast',
    component: Toast,
} as ComponentMeta<typeof Toast>;
const Template: ComponentStory<typeof Toast> = (props: IToastProps) => (
    <Toast {...props} />
);

const props: IToastProps = { title: 'Success', status: 'success', w: '488px' };

export const Success = Template.bind({});
Success.args = { ...props };

export const Error = Template.bind({});
Error.args = { ...props, title: 'Something went wrong', status: 'error' };
