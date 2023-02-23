import React from 'react';
import { Select, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import IInputSelectProps from './props';
import Icon from '../../contents/icon';
export default function InputSelect({
    type = 'text',
    color = COLORS.Text.T500.value,
    colorLabelPrimary = COLORS.Text.T500.value,
    colorLabelSecondary = COLORS.InputText.value,
    border = '1px solid ' + COLORS.Stroke.value,
    placeholderColor = COLORS.InputText.value,
    placeholder,
    h,
    w,
    lineHeight = '15px',
    errorBorderColor = COLORS.Negative.value,
    fontSize = '12px',
    fontWeight = '500',
    alignItems = 'left',
    ...props
}: IInputSelectProps) {
    return (
        <VStack
            direction='column'
            spacing='4px'
            h={h}
            w={w}
            alignItems={alignItems}
        >
            {props.labelPrimary ? (
                <Text
                    font={FONTS.T1.T12px.Medium500.value}
                    lineHeight={lineHeight}
                    color={colorLabelPrimary}
                    margin={0}
                >
                    {props.labelPrimary}
                </Text>
            ) : (
                <></>
            )}
            {props.labelSecondary ? (
                <Text
                    font={FONTS.T1.T12px.Medium500.value}
                    lineHeight={lineHeight}
                    color={colorLabelSecondary}
                    margin={0}
                >
                    {props.labelSecondary}
                </Text>
            ) : (
                <></>
            )}
            <Select
                variant='unstyled'
                border='none'
                fontSize='12px'
                lineHeight='15px'
                fontWeight='400'
                height={h}
                color='#5F43E2'
                icon={<Icon name='arrowDown' fontSize='10px' fill='#5F43E2' />}
            >
                <option selected value='Admin'>
                    Admin
                </option>
                <option value='Member'>Member</option>
            </Select>
            );
        </VStack>
    );
}
