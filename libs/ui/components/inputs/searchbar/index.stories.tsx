import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import Searchbar from '.';
import SearchbarProps, { Options } from './props';

export default {
    title: 'Components/Inputs/Searchbar',
    component: Searchbar<string>,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Searchbar<string>>;

const Template: ComponentStory<typeof Searchbar<string>> = (args) => {
    // Attributes
    const [value, setValue] = useState<string>('');
    const options: Options<string>[] = [
        { value: 'French', label: 'French' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Dutch', label: 'Dutch' },
    ];
    const [activeKeys, setActiveKeys] = useState<string[]>([]);

    // Functions
    function onCheck(value: string) {
        if (!activeKeys?.some((option) => option === value))
            setActiveKeys((prev) => [...prev, value]);
        else setActiveKeys((prev) => prev?.filter((option) => option != value));
    }
    function filter(value: string) {
        return options?.filter((option) =>
            option.value.toLowerCase().includes(value.toLowerCase()),
        );
    }
    return (
        <Searchbar
            {...args}
            value={value}
            onChange={(event) => setValue(event?.target.value)}
            onCheck={onCheck}
            activeKeys={activeKeys}
            options={filter(value)}
        />
    );
};
const props: SearchbarProps<string> = {
    color: COLORS.Text.T400.value,
    w: '228px',
    h: '32px',
    padding: '4px 10px',
    spacing: '8px',
    background: COLORS.White.T500.value,
    placeholder: 'Search for a project...',
    placeholderColor: COLORS.InputText.value,
    borderRadius: '6px',

};

export const SideBar = Template.bind({});
SideBar.args = { ...props, displayModal: false };

export const AddProject = Template.bind({});
AddProject.args = {
    ...props,
    w: '550px',
    h: '40px',
    backgroundColor: COLORS.White.T500.value,
};
