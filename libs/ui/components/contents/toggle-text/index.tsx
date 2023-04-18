import React from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../text';
import FONTS from '../../../constants/fonts';
import { IToggleTextProps } from './props';
import Toggle from '../toggle';
const ToggleText = ({
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
}: IToggleTextProps) => {
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
            bg={COLORS.White.T500.value}
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
                <Toggle isChecked={isChecked} toggleChecked={toggleChecked} />
            </HStack>
        </HStack>
    );
};

export default ToggleText;
