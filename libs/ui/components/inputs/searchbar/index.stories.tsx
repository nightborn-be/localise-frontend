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
};

export const SideBar = Template.bind({});
SideBar.args = { ...props };

export const AddProjeect = Template.bind({});
AddProjeect.args = {
    ...props,
    w: '550px',
    h: '40px',
    backgroundColor: COLORS.White.T500.value,
};
