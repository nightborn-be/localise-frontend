import { InputProps } from '@chakra-ui/react';
import { Font } from '../../../constants/fonts';
import { ReactElement } from 'react';
export interface IInputProjectKeyProps extends InputProps {
    font?: Font;
    rightElement?: ReactElement;
    text?: string;
}
