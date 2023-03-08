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
    textPaddingRight = '6px',
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
            <HStack w='176px' h='32px' padding='12px 0px'>
                <Text
                    font={FONTS.T1.T12px.Regular400.value}
                    color={COLORS.Text.T400.value}
                    pr={textPaddingRight}
                >
                    {text}
                </Text>
                <Switch
                    w='32px'
                    h='20px'
                    marginInlineStart={'0px !important'}
                />
            </HStack>
        </HStack>
    );
}
