import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import { IInputProps } from './props';
import React from 'react';
import Icon from '../../contents/icon/';
import Text from '../../contents/text';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';

interface test {
    name: string;
}
export default {
    title: 'Components/Inputs/Input',
    component: Input,
} as ComponentMeta<typeof Input>;
const Template: ComponentStory<typeof Input> = (props: IInputProps<test>) => (
    <Input {...props} />
);

const props: IInputProps<test> = {
    name: 'name',
    placeholder: 'Insert text',
    h: '2.5rem',
    w: '20.4375rem',
    padding: '0.75rem',
    font: FONTS.T1.T12px.Regular400.value,
    gap: '0.5rem',
    marginTop: '0.1875rem',
    value: null,
    onChange: () => {},
};

export const SimpleInput = Template.bind({});
SimpleInput.args = { ...props };

export const labelInput = Template.bind({});
labelInput.args = { ...props, label: 'Label' };

export const descriptionInput = Template.bind({});
descriptionInput.args = { ...props, description: 'Description' };

export const LabelsInput = Template.bind({});
LabelsInput.args = {
    ...props,
    label: 'Label',
    description: 'Description',
};

export const IsInvalidInput = Template.bind({});
IsInvalidInput.args = {
    ...props,
    isValid: false,
    label: 'Label',
    description: 'Description',
};

export const PasswordSimpleInput = Template.bind({});
PasswordSimpleInput.args = {
    ...props,
    type: 'password',
    placeholder: 'Insert password',
};

export const PasswordlabelInput = Template.bind({});
PasswordlabelInput.args = {
    ...props,
    type: 'password',
    placeholder: 'Insert password',
    label: 'Label',
};

export const PassworddescriptionInput = Template.bind({});
PassworddescriptionInput.args = {
    ...props,
    type: 'password',
    placeholder: 'Insert password',
    description: 'Description',
};

export const PasswordLabelsInput = Template.bind({});
PasswordLabelsInput.args = {
    ...props,
    type: 'password',
    placeholder: 'Insert password',
    label: 'Label',
    description: 'Description',
};

export const PasswordIsInvalidInput = Template.bind({});
PasswordIsInvalidInput.args = {
    ...props,
    type: 'password',
    placeholder: 'Insert password',
    isValid: false,
    label: 'Label',
    description: 'Description',
};

export const RightElementInput = Template.bind({});
RightElementInput.args = {
    color: COLORS.Text.T500.value,
    border: '0.0625rem solid transparent',
    padding: '0.5rem',
    gap: '0.75rem',
    w: '25.75rem',
    h: '32x',
    font: FONTS.T1.T14px.SemiBold600,
    placeHolder: 'Text',
    paddingRight: '3.125rem',
    focusBorderColor: `${COLORS.Stroke.value}`,
    hoverBorder: `0.0625rem solid ${COLORS.Stroke.value}`,
    rightElement: (
        <>
            <Icon name='enter' />
            <Text
                ml={'0.125rem'}
                color={COLORS.InputText.value}
                lineHeight={'0.75rem'}
                font={FONTS.T1.T10px.SemiBold600.value}
            >
                Enter
            </Text>
        </>
    ),
};
