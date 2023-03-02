import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import IInputProps from './props';
import React from 'react';
import Icon from '../../contents/icon/';
import Text from '../../contents/text';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import InputProjectKey from '.';
import InputProjectKeyProps from './props';
import ButtonIcon from '../button-icon';
import { ButtonSize } from '../button-icon/props';

export default {
    title: 'Components/Inputs/InputProjectKey',
    component: InputProjectKey,
} as ComponentMeta<typeof InputProjectKey>;
const Template: ComponentStory<typeof InputProjectKey> = (
    props: InputProjectKeyProps,
) => <InputProjectKey {...props} />;

export const ProjectKeyInput = Template.bind({});
ProjectKeyInput.args = {
    color: COLORS.Text.T500.value,
    border: `1px solid ${COLORS.Stroke.value}`,
    borderRadius: '8px',
    padding: '0px',
    w: '580px',
    h: '40x',
    font: FONTS.T1.T12px.Regular400.value,
    value: '9d7516a8-39b7-43d4-af09-a4f6c914b200',
    rightElement: (
        <ButtonIcon
            size={ButtonSize.XS}
            backgroundColor={COLORS.BG.value}
            displayIcon={(isHovered) => <Icon name='copyLarge' />}
            hoverBackgroundColor={COLORS.Line.value}
            aria-label='test'
        />
    ),
};
