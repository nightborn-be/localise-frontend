import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import Icon from '../../contents/icon';
import InputSelect from '.';
import IInputSelectProps from './props';

export default {
    title: 'Components/Inputs/InputSelect',
    component: InputSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelect> = (args) => (
    <InputSelect {...args} />
);
const props: IInputSelectProps = {
    labelColor: COLORS.Text.T500.value,
    color: COLORS.Text.T400.value,
    w: '327px',
    h: '40px',
    background: COLORS.White.T500.value,
    borderRadius: '8px',
    icon: <Icon name='date' />,
    options: [
        { value: 'Admin', label: 'Admin' },
        { value: 'Member', label: 'Member' },
    ],
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
    isInvalid: true,
    label: 'Label',
    description: 'Description',
};

