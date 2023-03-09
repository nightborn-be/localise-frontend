import React from 'react';
import { HStack, Switch } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import ToggleProps from './props';

export default function Toggle({
    border,
    borderRadius,
    boxShadow,
    w,
    h,
    padding,
    gap,
    text,
    textPaddingRight = '0.375rem',
}: ToggleProps) {
    //Render
    return (
        <HStack
            border={border}
            w={w}
            h={h}
            padding={padding}
            gap={gap}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
        >
            <HStack
                w='11rem'
                h='2rem'
                padding='0.75rem 0rem'
                spacing={textPaddingRight}
            >
                <Text
                    font={FONTS.T1.T12px.Regular400.value}
                    color={COLORS.Text.T400.value}
                >
                    {text}
                </Text>
                <Switch w='2rem' h='1.25rem' />
            </HStack>
        </HStack>
    );
}
