import { InputProps } from '@chakra-ui/react';
import { Font } from '../../../constants/fonts';
export default interface TagProps extends InputProps {
    font?: Font,
    value?: string,
    color?: string,
}

