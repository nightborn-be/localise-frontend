import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import React from 'react';
import Icon from '../../contents/icon';
import Text from '../../contents/text';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import ProjectColorPicker from '.';
import { Image } from '@chakra-ui/react';
import ProjectColorPickerProps from './props';

export default {
    title: 'Components/Sidebars/ProjectColorPicker',
    component: ProjectColorPicker,
} as ComponentMeta<typeof ProjectColorPicker>;
const Template: ComponentStory<typeof ProjectColorPicker> = (
    props: ProjectColorPickerProps,
) => <ProjectColorPicker {...props} />;

const props: ProjectColorPickerProps = {};

export const Project = Template.bind({});
Project.args = { ...props };
