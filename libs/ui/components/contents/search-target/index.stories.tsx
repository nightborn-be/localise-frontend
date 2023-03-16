import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ISearchTargetProps } from './props';
import SearchTarget from '.';

export default {
    title: 'Components/Contents/SearchTarget',
    component: SearchTarget,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchTarget>;

const Template: ComponentStory<typeof SearchTarget> = (args) => {
    const [value, setValue] = useState<string>('');
    return (
        <SearchTarget
            {...args}
            value={value}
            onChange={(value) => setValue(value.target.value)}
        />
    );
};
const props: ISearchTargetProps<boolean> = {
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
