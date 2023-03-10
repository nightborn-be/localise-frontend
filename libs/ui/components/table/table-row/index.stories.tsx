import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import React from 'react';
import Icon from '../../contents/icon';
import TableRow from '.';
import ITableRowProps from './props';

export default {
    title: 'Components/Table/TableRow',
    component: TableRow,
    TableRow,
} as ComponentMeta<typeof TableRow>;
const Template: ComponentStory<typeof Input> = (props: ITableRowProps) => (
    <TableRow {...props} />
);

export const RightAreaElementInput = Template.bind({});
RightAreaElementInput.args = {
    avatar: <Icon name='crossClose' />,
    firstName: 'First name',
    lastName: 'Last name',
    role: 'Admin',
};
