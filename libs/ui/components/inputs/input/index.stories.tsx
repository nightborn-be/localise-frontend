import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import IInputProps from './props';
import React from 'react';
export default {
    title: 'Components/Inputs/Input',
    component: Input,
} as ComponentMeta<typeof Input>;
const Template: ComponentStory<typeof Input> = (props: IInputProps) => (
    <Input {...props} />
);

const props: IInputProps = {
    placeholder: 'Insert text',
    h: '40px',
    w: '327px',
    padding: '12px',
    lineHeight: '15px',
    fontSize: '12px',
    fontWeight: '400',
    gap: '8px',
    marginTop: '3px',
};

export const SimpleInput = Template.bind({});
SimpleInput.args = { ...props };

export const LabelPrimaryInput = Template.bind({});
LabelPrimaryInput.args = { ...props, labelPrimary: 'Label' };

export const LabelSecondaryInput = Template.bind({});
LabelSecondaryInput.args = { ...props, labelSecondary: 'Description' };

export const LabelsInput = Template.bind({});
LabelsInput.args = {
    ...props,
    labelPrimary: 'Label',
    labelSecondary: 'Description',
};

export const IsInvalidInput = Template.bind({});
IsInvalidInput.args = {
    ...props,
    isInvalid: 'isInvalid',
    labelPrimary: 'Label',
    labelSecondary: 'Description',
};

export const PasswordSimpleInput = Template.bind({});
PasswordSimpleInput.args = {
    ...props,
    type: 'password',
    placeholder: 'Insert password',
};

export const PasswordLabelPrimaryInput = Template.bind({});
PasswordLabelPrimaryInput.args = {
    ...props,
    type: 'password',
    placeholder: 'Insert password',
    labelPrimary: 'Label',
};

export const PasswordLabelSecondaryInput = Template.bind({});
PasswordLabelSecondaryInput.args = {
    ...props,
    type: 'password',
    placeholder: 'Insert password',
    labelSecondary: 'Description',
};

export const PasswordLabelsInput = Template.bind({});
PasswordLabelsInput.args = {
    ...props,
    type: 'password',
    placeholder: 'Insert password',
    labelPrimary: 'Label',
    labelSecondary: 'Description',
};

export const PasswordIsInvalidInput = Template.bind({});
PasswordIsInvalidInput.args = {
    ...props,
    type: 'password',
    placeholder: 'Insert password',
    isInvalid: 'isInvalid',
    labelPrimary: 'Label',
    labelSecondary: 'Description',
};
