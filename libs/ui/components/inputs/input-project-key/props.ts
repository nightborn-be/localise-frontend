import { InputProps } from '@chakra-ui/react';
import { Font } from '../../../constants/fonts';
export default interface InputProjectKeyProps extends InputProps {
    font?: Font,
    rightElement?: string,
}