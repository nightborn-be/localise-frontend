import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import React from 'react';
import TableHeaderMembers from '.';
import ITableHeaderMembersProps from './props';

export default {
    title: 'Components/Table/TableHeaderMembers',
    component: TableHeaderMembers,
    TableHeaderMembers,
} as ComponentMeta<typeof TableHeaderMembers>;
const Template: ComponentStory<typeof Input> = (
    props: ITableHeaderMembersProps,
) => <TableHeaderMembers {...props} />;

export const TableHeaderDefault = Template.bind({});
TableHeaderDefault.args = {
    avatarPicture: '/assets/images/avatar.png',
};
