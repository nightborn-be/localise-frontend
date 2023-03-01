import { ButtonProps, StackDirection } from "@chakra-ui/react";
export default interface IButtonProps extends ButtonProps {
    startEnhancer?: (enhancerProps: EnhancerProps) => React.ReactElement,
    endEnhancer?: (enhancerProps: EnhancerProps) => React.ReactElement,
    hoverColor?: string,
    hoverBackgroundColor?: string,
    direction?: StackDirection,
    spacing?: string,
    children?: React.ReactElement | string;
    color?: string;
}

export type EnhancerProps = {
    isHovered: boolean | undefined;
}