import React from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import Switch from './toggle-switch';
import { ISwitchTextProps } from './props';
const SwitchText = ({
    border,
    borderRadius,
    boxShadow,
    w,
    h,
    padding,
    gap,
    text,
    textPaddingRight = '0.375rem',
    isChecked,
    toggleChecked,
}: ISwitchTextProps) => {
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
                <Switch isChecked={isChecked} toggleChecked={toggleChecked} />
            </HStack>
        </HStack>
    );
};

export default SwitchText;