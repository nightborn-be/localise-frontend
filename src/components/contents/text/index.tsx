import { Text as ChakraText } from '@chakra-ui/react';
import COLORS from 'src/constants/colors';
import FONTS from 'src/constants/fonts';
import { TextProps } from './props';

const Text = ({
    children,
    font = FONTS.T1.T16px.Regular400.value,
    color = COLORS.Text.T500.value,
    ...rest
}: TextProps) => {
    return (
        <ChakraText
            color={color}
            fontFamily={font?.fontFamily}
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
