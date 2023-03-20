import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IRoleProps } from './props';
import Role from './index';

export default {
    title: 'Components/Contents/Role',
    component: Role,
} as ComponentMeta<typeof Role>;

const Template: ComponentStory<typeof Role> = (props: IRoleProps) => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    return (
        <Role
            {...props}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
        />
    );
};

export const Default = Template.bind({});
