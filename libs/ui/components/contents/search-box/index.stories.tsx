import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBox from '.';
import { ISearchBoxProps } from './props';

export default {
    title: 'Components/Contents/SearchBox',
    component: SearchBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => {
    const [value, setValue] = useState<string>('');
    return (
        <SearchBox
            {...args}
            value={value}
            onChange={(value) => setValue(value.target.value)}
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

export const SearchBarTagAdded = Template.bind({});
SearchBarTagAdded.args = {
    ...props,
    tags: ['French', 'Dutch', 'Japanes'],
};
