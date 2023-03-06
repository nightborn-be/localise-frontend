import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import SearchbarTag from '.';
import SearchbarTagProps from './props';
import Tag from '../tag';
import FONTS from '../../../constants/fonts';

export default {
    title: 'Components/Inputs/SearchbarTag',
    component: SearchbarTag,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SearchbarTag>;

const Template: ComponentStory<typeof SearchbarTag> = (args) => (
    <SearchbarTag {...args} />
);
const props: SearchbarTagProps = {
    searchbar: {
        color: COLORS.Text.T400.value,
        w: '550px',
        h: '40px',
        padding: '4px 10px',
        gap: '8px',
        backgroundColor: COLORS.White.T500.value,
        placeholder: 'Search for a project...',
        placeholderColor: COLORS.InputText.value,
        borderRadius: '6px',
    },
    w: '590px',
    h: '128px',
    padding: '20px',
    gap: '12px',
    borderRadius: '8px',
    border: `1px solid ${COLORS.Line.value}`,
};

export const SearchBarTag = Template.bind({});
SearchBarTag.args = { ...props };

export const SearchBarTagAdded = Template.bind({});
SearchBarTagAdded.args = {
    ...props,
    tags: [
        <Tag value='French' font={FONTS.T1.T12px.Medium500.value} />,
        <Tag value='Dutch' font={FONTS.T1.T12px.Medium500.value} />,
    ],
};
