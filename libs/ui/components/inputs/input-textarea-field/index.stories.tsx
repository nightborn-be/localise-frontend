import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';
import React from 'react';
import Icon from '../../contents/icon';
import Text from '../../contents/text';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import InputTextAreaField from '.';
import { IInputTextAreaFieldProps } from './props';

interface test {
    name: string;
}
export default {
    title: 'Components/Inputs/InputTextAreaField',
    component: InputTextAreaField,
} as ComponentMeta<typeof InputTextAreaField>;
const Template: ComponentStory<typeof Input> = (
    props: IInputTextAreaFieldProps<test>,
) => <InputTextAreaField {...props} />;

export const RightAreaElementInput = Template.bind({});
RightAreaElementInput.args = {
    color: COLORS.Text.T500.value,
    border: '0.0625rem solid transparent',
    padding: '0.5rem',
    gap: '0.625rem',
    w: '32.5rem',
    h: '3.125rem',
    font: FONTS.T1.T12px.Regular400.value,
    placeHolder: 'Text',
    paddingRight: '3.125rem',
    focusBorderColor: `${COLORS.Stroke.value}`,
    hoverBorder: `0.0625rem solid ${COLORS.Stroke.value}`,
    rightElement: (
        <>
            <Icon name='enter' />
            <Text
                ml={'0.125rem'}
                color={COLORS.InputText.value}
                lineHeight={'0.75rem'}
                font={FONTS.T1.T10px.SemiBold600.value}
            >
                Enter
            </Text>
        </>
    ),
};
