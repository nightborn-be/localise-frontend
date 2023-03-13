import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Icon from '../../contents/icon/';
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
    border: `0.0625rem solid ${COLORS.Stroke.value}`,
    borderRadius: '0.5rem',
    padding: '0rem',
    w: '36.25rem',
    h: '2.5rem',
    font: FONTS.T1.T12px.Regular400.value,
    value: '9d7516a8-39b7-43d4-af09-a4f6c914b200',
    rightElement: (
        <ButtonIcon
            size={ButtonSize.XS}
            backgroundColor={COLORS.BG.value}
            iconComponent={() => <Icon name='copyClipBoardLarge' />}
            hoverBackgroundColor={COLORS.Line.value}
            aria-label='test'
        />
    ),
};
