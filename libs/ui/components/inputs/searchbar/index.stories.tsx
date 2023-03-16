import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import Searchbar from '.';
import SearchbarProps, { Options } from './props';

export default {
    title: 'Components/Inputs/Searchbar',
    component: Searchbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = (args) => {
    const [value, setValue] = useState<string>('');
    const [options, setOptions] = useState<Options<string>[]>();
    const [activeKeys, setActiveKeys] = useState<string[]>(['French']);
    function onCheck(value) {
        if (!activeKeys?.some((option) => option === value))
            setActiveKeys((prev) => [{ ...prev }, value]);
        else setActiveKeys((prev) => prev?.filter((option) => option != value));
    }
    return (
        <Searchbar
            {...args}
            value={value}
            onChange={(value) => setValue(value.target.value)}
            onCheck={onCheck}
            activeKeys={activeKeys}
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
    options: [
        { value: 'French', label: 'French', isActive: false },
        { value: 'Chinese', label: 'Chinese', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
        { value: 'Dutch', label: 'Dutch', isActive: false },
    ],
};

export const SideBar = Template.bind({});
SideBar.args = { ...props };

export const AddProject = Template.bind({});
AddProject.args = {
    ...props,
    w: '550px',
    h: '40px',
    backgroundColor: COLORS.White.T500.value,
};
