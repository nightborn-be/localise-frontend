import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import Icon from '../../contents/icon';
import InputSelect from '.';
import IInputSelectProps from './props';
import InputSelectAndInput from '.';
import IInputSelectAndInputProps from './props';

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
const props: IInputSelectAndInputProps = {
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
        fontSize: '12px',
        lineHeight: '15px',
        dropDownIndicator: <Icon name='DropdownIndicator'></Icon>,
        padding: '0px',
        gap: '4px',
        placeholder: 'Admin',
        paddingRight: '0',
        paddingLeft: '0',
    },
    inputProps: {
        placeholder: 'Text',
        w: '216px',
        h: '40px',
        border: 'transparent',
    },
    w: '327px',
    h: '40px',
    border: `1px solid ${COLORS.Line.value}`,
    borderRadius: '8px',
};

export const SimpleSelect = Template.bind({});
SimpleSelect.args = { ...props };

export const labelSelect = Template.bind({});
labelSelect.args = { ...props, label: 'Label' };

export const descriptionSelect = Template.bind({});
descriptionSelect.args = { ...props, description: 'Description' };

export const LabelsSelect = Template.bind({});
LabelsSelect.args = {
    ...props,
    label: 'Label',
    description: 'Description',
};

export const IsInvalidSelect = Template.bind({});
IsInvalidSelect.args = {
    ...props,
    isValid: false,
    label: 'Label',
    description: 'Description',
};
