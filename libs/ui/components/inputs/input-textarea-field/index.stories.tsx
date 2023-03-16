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
    border: '1px solid transparent',
    padding: '8px',
    gap: '10px',
    w: '520px',
    h: '110px',
    font: FONTS.T1.T12px.Regular400.value,
    placeHolder: 'Text',
    paddingRight: '50px',
    focusBorderColor: `${COLORS.Stroke.value}`,
    hoverBorder: `1px solid ${COLORS.Stroke.value}`,
    rightElement: (
        <>
            <Icon name='enter' />
            <Text
                ml={'2px'}
                color={COLORS.InputText.value}
                lineHeight={'12px'}
                font={FONTS.T1.T10px.SemiBold600.value}
            >
                Enter
            </Text>
        </>
    ),
};
