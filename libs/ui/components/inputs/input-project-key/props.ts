import { InputProps } from '@chakra-ui/react';
import { Font } from '../../../constants/fonts';
export interface IInputProjectKeyProps extends InputProps {
    font?: Font,
    rightElement?: string,
    text?:string,
}