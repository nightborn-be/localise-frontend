import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IRoleProps from './props';
import Role from '.';
import COLORS from '../../../constants/colors';

export default {
    title: 'Components/Constents/Role',
    component: Role,
} as ComponentMeta<typeof Role>;
const Template: ComponentStory<typeof Role> = (props: IRoleProps) => (
    <Role {...props} />
);

const Admin = Template.bind({})
Admin.args = { 
    text:"Admin",
    color: COLORS.Localize.Purple.T500.value,
    backgroudColor: COLORS.Localize.Purple.T100.value,
};

const Developer = Template.bind({});
Developer.args = {
    text: 'Developer',
    color: COLORS.Warning.T500.value,
    backgroudColor: COLORS.Warning.T100.value,
};

const Translator = Template.bind({});
Translator.args = {
    text: 'Translator',
    color: COLORS.Text.T500.value,
    backgroudColor: COLORS.Line.value
};