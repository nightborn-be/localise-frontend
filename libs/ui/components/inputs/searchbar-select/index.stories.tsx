import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import SearchbarSelect from '.';
import ISearchbarSelectProps from './props';
import { SearchBarOption } from '../searchbar/props';

export default {
    title: 'Components/Inputs/SearchbarSelect',
    component: SearchbarSelect<string>,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchbarSelect<string>>;

const Template: ComponentStory<typeof SearchbarSelect<string>> = (args) => {
    // Attributes
    const options: SearchBarOption<string>[] = [
        { value: 'French', label: 'French' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Dutch', label: 'Dutch' },
        { value: 'German', label: 'German' },
    ];
    const [filterValue, setFilterValue] = useState<string>('');
    const [activeKey, setActiveKey] = useState<string>();

    // Functions

    return (
        <SearchbarSelect
            {...args}
            filterValue={filterValue}
            activeKey={activeKey}
            onSelect={(value) => {
                setActiveKey(value);
            }}
            onChange={(event) => setFilterValue(event.target.value)}
            options={options.filter((option) =>
                option.value.toLowerCase().includes(filterValue.toLowerCase()),
            )}
        />
    );
};
const props: ISearchbarSelectProps<string> = {
    color: COLORS.Text.T400.value,
    w: '36.875rem',
    h: '2.25rem',
    padding: '0.25rem 0.625rem',
    spacing: '0.5rem',
    background: COLORS.White.T500.value,
    placeholder: 'Search for a project...',
    placeholderColor: COLORS.InputText.value,
    borderRadius: '0.375rem',
    defaultSelectValue: 'Choose a source language',
};

export const SearchbarSelectDefault = Template.bind({});
SearchbarSelectDefault.args = { ...props };
