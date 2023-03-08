import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import IInputProps from './props';
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
    h: '40px',
    w: '327px',
    padding: '12px',
    font: FONTS.T1.T12px.Regular400.value,
    gap: '8px',
    marginTop: '3px',
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
    border: '1px solid transparent',
    padding: '8px',
    gap: '12px',
    w: '412px',
    h: '32x',
    font: FONTS.T1.T14px.SemiBold600,
    placeHolder: 'Text',
    paddingRight: '50px',
    focusBorderColor: `${COLORS.Stroke.value}`,
    hoverBorder: `1px solid ${COLORS.Stroke.value}`,
    rightElement: (
        <>
            <Icon name='enter' />
            <Text
                ml={'2px'}
                color={COLORS.InputText.value}
                lineHeight={'12px'}
                font={FONTS.T1.T10px.SemiBold600.value}
            >
                Enter
            </Text>
        </>
    ),
};
export const EditKeyName = Template.bind({});
EditKeyName.args = {
    color: COLORS.Text.T500.value,
    border: '1px solid transparent',
    padding: '8px',
    gap: '12px',
    w: '412px',
    h: '32x',
    font: FONTS.T1.T14px.SemiBold600,
    placeHolder: 'Text',
    paddingRight: '50px',
    focusBorderColor: `transparent`,
    hoverBorder: `1px solid transparent`,
    rightElement: <Icon name='edit' />,
};