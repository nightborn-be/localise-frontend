import React from 'react';
import { TextProps } from './props';
import FONTS from '../../../constants/fonts';
import COLORS from '../../../constants/colors';
import { Text as ChakraText } from '@chakra-ui/react';

const Text = ({
    children,
    font = FONTS.T1.T12px.SemiBold600.value,
    color = COLORS.Text.T500.value,
    ...rest
}: TextProps) => {
    return (
        <ChakraText
            color={color}
            fontSize={font?.fontSize}
            fontWeight={font?.fontWeight}
            lineHeight={font?.lineHeight}
            letterSpacing={font?.letterSpacing}
            {...rest}
        >
            {children}
        </ChakraText>
    );
};

export default Text;
