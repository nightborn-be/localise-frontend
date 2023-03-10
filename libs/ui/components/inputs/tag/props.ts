import { ChakraProps } from '@chakra-ui/react';
import { Font } from '../../../constants/fonts';
export default interface TagProps extends ChakraProps {
    font?: Font,
    value?: string,
    color?: string,
    onClick?: () => void
}

