import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import React from 'react';
import Icon from '../../contents/icon';
import TableHeader from '.';
import ITableHeaderProps from './props';

export default {
    title: 'Components/Table/TableHeader',
    component: TableHeader,
    TableHeader,
} as ComponentMeta<typeof TableHeader>;
const Template: ComponentStory<typeof Input> = (props: ITableHeaderProps) => (
    <TableHeader {...props} />
);

export const TableHeaderDefault = Template.bind({});
TableHeaderDefault.args = {
    avatarPicture: '/assets/images/avatar.png',
    firstColTitle: 'First name',
    secondColTitle: 'Name',
    thirdColTitle: 'Role',
};
