import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IButtonIconProps, { ButtonSize } from './props';
import Icon from '../../contents/icon';
import ButtonIcon from '.';

export default {
    title: 'Components/Inputs/ButtonIcon',
    component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;
const Template: ComponentStory<typeof ButtonIcon> = (
    props: IButtonIconProps,
) => <ButtonIcon {...props} />;
