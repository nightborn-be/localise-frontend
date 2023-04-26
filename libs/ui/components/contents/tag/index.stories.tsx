import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import Tag from '.';
import { ITagProps } from './props';
import FONTS from '../../../constants/fonts';

export default {
    title: 'Components/Contents/Tag',
    component: Tag,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
const props: ITagProps<string> = {
    w: 'fit-content',
    h: '1.75rem',
    padding: '0.375rem 0.625rem',
    gap: '0.25rem',
    bg: COLORS.Line.value,
    borderRadius: '2.25rem',
    font: FONTS.T1.T12px.Medium500.value,
    color: COLORS.Text.T400.value,
    value: 'French',
};

export const FrenchTag = Template.bind({});
FrenchTag.args = { ...props };

export const DutchTtag = Template.bind({});
DutchTtag.args = {
    ...props,
    w: 'fit-content',
    value: 'Dutch',
};
