import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import InputSelect from '.';
import IInputSelectProps from './props';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';

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
    color: COLORS.Text.T400.value,
    w: '20.4375rem',
    h: '2.5rem',
    background: COLORS.White.T500.value,
    borderRadius: '0.5rem',
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
    isValid: false,
    label: 'Label',
    description: 'Description',
};

const selectSortProps: IInputSelectProps = {
    color: COLORS.Text.T400.value,
    w: '20.4375rem',
    h: '2.5rem',
    background: COLORS.White.T500.value,
    borderRadius: '0.5rem',
    options: [
        { value: 'None', label: 'None' },
        { value: 'Name', label: 'Name', icon: <Icon name='sortName' /> },
        { value: 'Author', label: 'Author', icon: <Icon name='sort' /> },
        { value: 'Date', label: 'Date', icon: <Icon name='date' /> },
    ],
};

export const SortSelect = Template.bind({});
SortSelect.args = {
    ...selectSortProps,
    showNotification: false,
    displayColorBox: false,
    marginLeftText: '0rem',
    w: '11.75rem',
    h: '2rem',
    text: 'None',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    canBeSelected: true,
};

export const SortByName = Template.bind({});
SortByName.args = {
    ...selectSortProps,
    startEnhancer: <Icon name='sortName' />,
    showNotification: false,
    marginLeftText: '0.75rem',
    w: '11.75rem',
    h: '2rem',
    text: 'Name',
    textFont: FONTS.T1.T12px.Medium500.value,
    textColor: COLORS.Text.T400.value,
    canBeSelected: true,
};

