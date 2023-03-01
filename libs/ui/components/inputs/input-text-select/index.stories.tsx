import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import Icon from '../../contents/icon';
import InputSelect from '.';
import IInputSelectProps from './props';
import InputSelectAndInput from '.';
import IInputSelectAndInputProps from './props';
import FONTS from '../../../constants/fonts';

export default {
    title: 'Components/Inputs/InputSelectAndInput',
    component: InputSelectAndInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelectAndInput> = (args) => (
    <InputSelectAndInput {...args} />
);
interface test {
    name: string;
}
const props: IInputSelectAndInputProps<test> = {
    selectProps: {
        labelColor: COLORS.Text.T500.value,
        color: COLORS.Localize.Purple.T500.value,
        placeholderColor: COLORS.Localize.Purple.T500.value,
        dropdownArrowColor: COLORS.Localize.Purple.T500.value,
        w: '100px',
        h: '40px',
        background: COLORS.White.T500.value,
        border: 'transparent',
        options: [
            { value: 'Admin', label: 'Admin' },
            { value: 'Member', label: 'Member' },
            { value: 'Utilisateur', label: 'Utilisateur' },
            { value: 'Administrateur', label: 'Administrateur' },
        ],
        fontWeight: '400',
        dropDownIndicator: <Icon name='dropdownIndicator' />,
        fontSize: '12px',
        lineHeight: '15px',
        padding: '0px',
        gap: '4px',
        placeholder: 'Admin',
        paddingRight: '0',
        paddingLeft: '0',
    },
    inputProps: {
        name: 'name',
        value: null,
        onChange: () => {},
        placeholder: 'Text',
        w: '100%',
        h: '40px',
        border: 'transparent',
        font: FONTS.T1.T12px.Regular400.value,
    },
    w: '327px',
    h: '40px',
    border: `1px solid ${COLORS.Line.value}`,
    borderRadius: '8px',
};

export const SimpleTextSelect = Template.bind({});
SimpleTextSelect.args = { ...props };

export const LabelTextSelect = Template.bind({});
LabelTextSelect.args = { ...props, label: 'Label' };

export const DescriptionTextSelect = Template.bind({});
DescriptionTextSelect.args = { ...props, description: 'Description' };

export const LabelsTextSelect = Template.bind({});
LabelsTextSelect.args = {
    ...props,
    label: 'Label',
    description: 'Description',
};

export const IsInvalidTextSelect = Template.bind({});
IsInvalidTextSelect.args = {
    ...props,
    isValid: false,
    label: 'Label',
    description: 'Description',
};
export const SimpleTextSelectWithIcon = Template.bind({});
SimpleTextSelectWithIcon.args = {
    ...props,
    rightIcon: <Icon name='removeSmall' stroke={COLORS.InputText.value} />,
};

export const LabelTextSelectWithIcon = Template.bind({});
LabelTextSelectWithIcon.args = {
    ...props,
    label: 'Label',
    rightIcon: <Icon name='removeSmall' stroke={COLORS.InputText.value} />,
};

export const DescriptionTextSelectWithIcon = Template.bind({});
DescriptionTextSelectWithIcon.args = {
    ...props,
    description: 'Description',
    rightIcon: <Icon name='removeSmall' stroke={COLORS.InputText.value} />,
};

export const LabelsTextSelectWithIcon = Template.bind({});
LabelsTextSelectWithIcon.args = {
    ...props,
    label: 'Label',
    description: 'Description',
    rightIcon: <Icon name='removeSmall' stroke={COLORS.InputText.value} />,
};

export const IsInvalidTextSelectWithIcon = Template.bind({});
IsInvalidTextSelectWithIcon.args = {
    ...props,
    isValid: false,
    label: 'Label',
    description: 'Description',
    rightIcon: <Icon name='removeSmall' stroke={COLORS.InputText.value} />,
};
