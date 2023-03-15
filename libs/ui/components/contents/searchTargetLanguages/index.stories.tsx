import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ISearchTargetLanguagesProps from './props';
import SearchTargetLanguages from '.';

export default {
    title: 'Components/Contents/SearchTargetLanguages',
    component: SearchTargetLanguages,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchTargetLanguages>;

const Template: ComponentStory<typeof SearchTargetLanguages> = (args) => {
    const [value, setValue] = useState<string>('');
    return (
        <SearchTargetLanguages
            {...args}
            value={value}
            onChange={(value) => setValue(value.target.value)}
        />
    );
};
const props: ISearchTargetLanguagesProps = {
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
    tags: [{ value: 'French' }, { value: 'Dutch' }, { value: 'Japanes' }],
};
