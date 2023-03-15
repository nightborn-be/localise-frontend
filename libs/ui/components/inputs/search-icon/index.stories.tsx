import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import SearchInput from '.';
import SearchInputProps from './props';

export default {
    title: 'Components/Inputs/SearchInput',
    component: SearchInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => {
    const [value, setValue] = useState<string>('');
    return (
        <SearchInput
            {...args}
            value={value}
            onChange={(value) => setValue(value.target.value)}
        />
    );
};
const props: SearchInputProps = {
    color: COLORS.Text.T400.value,
    padding: '4px 10px',
    gap: '8px',
    background: COLORS.White.T500.value,
    placeholderColor: COLORS.InputText.value,
    borderRadius: '6px',
    placeholder: 'Type to search...',
};

export const SideBar = Template.bind({});
SideBar.args = { ...props };
