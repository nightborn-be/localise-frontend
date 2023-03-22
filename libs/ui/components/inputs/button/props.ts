import { ButtonProps, StackDirection } from '@chakra-ui/react';
import { Font } from '../../../constants/fonts';
export interface IButtonProps extends ButtonProps {
    startEnhancer?: (enhancerProps: EnhancerProps) => React.ReactElement;
    endEnhancer?: (enhancerProps: EnhancerProps) => React.ReactElement;
    hoverColor?: string;
    hoverBackgroundColor?: string;
    direction?: StackDirection;
    spacing?: string;
    children?: React.ReactElement | string;
    color?: string;
    font?: Font;
    onClick?: () => void;
}

export type EnhancerProps = {
    isHovered: boolean | undefined;
};
