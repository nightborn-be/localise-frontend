import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';
import InputSelect from '.';

export default {
    title: 'Components/Inputs/InputSelect',
    component: InputSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelect> = (args) => (
    <InputSelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'My Button',
};
