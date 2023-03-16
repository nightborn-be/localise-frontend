import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IRoleProps from './props';
import COLORS from '../../../constants/colors';
import Role from './index';
export default {
    title: 'Components/Contents/Role',
    component: Role,
} as ComponentMeta<typeof Role>;
const Template: ComponentStory<typeof Role> = (props: IRoleProps) => (
    <Role {...props} />
);

export const Admin = Template.bind({});
Admin.args = {
    text: 'Admin',
    color: COLORS.Localize.Purple.T500.value,
    backgroundColor: COLORS.Localize.Purple.T100.value,
};

export const Developer = Template.bind({});
Developer.args = {
    text: 'Developer',
    color: COLORS.Warning.T500.value,
    backgroundColor: COLORS.Warning.T100.value,
};

export const Translator = Template.bind({});
Translator.args = {
    text: 'Translator',
    color: COLORS.Text.T500.value,
    backgroundColor: COLORS.Line.value,
};