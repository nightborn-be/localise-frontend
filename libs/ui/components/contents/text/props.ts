import { TextProps as ChakraTextProps } from '@chakra-ui/react';
import { Font } from 'libs/ui/constants/fonts';

export interface TextProps extends ChakraTextProps {
    font?: Font;
    color?: string;
    children?: React.ReactNode | React.ReactNode[];
}
