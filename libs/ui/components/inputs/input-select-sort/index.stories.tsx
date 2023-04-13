import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputSelectSort from '.';
import { IInputSelectSortProps } from './props';
import Icon from '../../contents/icon';

export default {
    title: 'Components/Inputs/InputSelectSort',
    component: InputSelectSort,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof InputSelectSort>;

const Template: ComponentStory<typeof InputSelectSort> = (
    args: IInputSelectSortProps,
) => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    return (
        <InputSelectSort
            options={[
                { value: 'None', label: 'None' },
                {
                    value: 'Name',
                    label: 'Name',
                    icon: <Icon name='sortName' />,
                },
                {
                    value: 'Author',
                    label: 'Author',
                    icon: <Icon name='sort' />,
                },
                { value: 'Date', label: 'Date', icon: <Icon name='date' /> },
            ]}
            onClick={setSelectedValue}
            valueSelected={selectedValue}
        />
    );
};

export const SortMenu = Template.bind({});
