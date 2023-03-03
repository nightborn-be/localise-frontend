import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import Searchbar from '.';
import SearchbarProps from './props';

export default {
    title: 'Components/Inputs/Searchbar',
    component: Searchbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = (args) => (
    <Searchbar {...args} />
);
const props: SearchbarProps = {
    color: COLORS.Text.T400.value,
    w: '228px',
    h: '32px',
    padding: '4px 10px',
    gap: '8px',
    background: COLORS.White.T500.value,
    placeholder: 'Search for a project...',
    placeholderColor: COLORS.InputText.value,
    borderRadius: '6px',
    options: [
        { value: 'Mobile App', label: 'Mobile App', color: '#FF74A3' },
        { value: 'Mobile Project', label: 'Mobile Project', color: '#8EF1AA' },
        {
            value: 'Desktop Project',
            label: 'Desktop Project',
            color: '#7AB7F0',
        },
        { value: 'Desktop App', label: 'Desktop App', color: '#FA5454' },
        { value: 'Back-Office', label: 'Back-Office', color: '#FF74A3' },
        { value: 'Web App', label: 'Web App', color: '#FF74A3' },
        { value: 'Project Type 5', label: 'Project Type 5', color: '#FF74A3' },
        { value: 'Project Type 6', label: 'Project Type 6', color: '#FF74A3' },
        { value: 'Project Type 7', label: 'Project Type 7', color: '#FF74A3' },
        { value: 'Project Type 8', label: 'Project Type 8', color: '#FF74A3' },
        { value: 'Project Type 9', label: 'Project Type 9', color: '#FF74A3' },
    ],
    selectProps: {
        backgroundOptionColor: COLORS.Localize.Purple.T500.value,
        focusBackgroundOptionColor: COLORS.BG.value,
        borderRadiusOption: '6px',
        selectedOptionColor: COLORS.White.T500.value,
        textOptionColor: COLORS.Text.T400.value,
    },
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
