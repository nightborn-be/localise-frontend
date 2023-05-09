import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import React from 'react';
import TableRowMembers from '.';
import ITableRowMembersProps from './props';

export default {
    title: 'Components/Table/TableRowMembers',
    component: TableRowMembers,
    TableRowMembers,
} as ComponentMeta<typeof TableRowMembers>;
const Template: ComponentStory<typeof Input> = (
    props: ITableRowMembersProps,
) => <TableRowMembers {...props} />;

export const RightAreaElementInput = Template.bind({});
RightAreaElementInput.args = {
    avatarPicture: '/assets/images/avatar.png',
    email: 'First name',
    role: 'Admin',
};
