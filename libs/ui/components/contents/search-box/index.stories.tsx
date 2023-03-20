import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBox from '.';
import { ISearchBoxProps } from './props';
import { Options } from '../../inputs/searchbar/props';

export default {
    title: 'Components/Contents/SearchBox',
    component: SearchBox<string>,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchBox<string>>;

const Template: ComponentStory<typeof SearchBox<string>> = (args) => {
    const [value, setValue] = useState<string>('');
    const options: Options<string>[] = [
        { value: 'French', label: 'French' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Dutch', label: 'Dutch' },
        { value: 'Italian', label: 'Italian' },
        { value: 'German', label: 'German' },
    ];
    const [activeKeys, setActiveKeys] = useState<string[]>([]);

    // Functions
    function onCheck(value: string) {
        if (!activeKeys?.some((option) => option === value))
            setActiveKeys((prev) => [...prev, value]);
        else setActiveKeys((prev) => prev?.filter((option) => option != value));
    }
    function filter(value: string) {
        return options?.filter((option) =>
            option.value.toLowerCase().includes(value.toLowerCase()),
        );
    }

    return (
        <SearchBox
            {...args}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onCheck={onCheck}
            activeKeys={activeKeys}
            options={filter(value)}
        />
    );
};
const props: ISearchBoxProps<string> = {
    title: 'Target',
    description:
        'Target languages are secondary languages you want to add to your project.',
    placeholder: 'Search for a project...',
};

export const SearchBarTag = Template.bind({});
SearchBarTag.args = { ...props };
