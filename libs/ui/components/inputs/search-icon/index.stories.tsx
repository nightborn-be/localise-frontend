import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import SearchIcon from '.';
import SearchIconProps from './props';

export default {
    title: 'Components/Inputs/SearchIcon',
    component: SearchIcon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = (args) => (
    <SearchIcon {...args} />
);
const props: SearchIconProps = {
    color: COLORS.Text.T400.value,
    w: '228px',
    h: '32px',
    padding: '4px 10px',
    gap: '8px',
    background: COLORS.White.T500.value,
    placeholderColor: COLORS.InputText.value,
    borderRadius: '6px',
};

export const SideBar = Template.bind({});
SideBar.args = { ...props };
