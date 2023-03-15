import { ChakraProps } from '@chakra-ui/react';
import { Font } from '../../../constants/fonts';
export default interface ITagProps extends ChakraProps {
    font?: Font,
    value?: string,
    color?: string,
    onDelete?: () => void
}
