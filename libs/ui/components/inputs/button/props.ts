import { ButtonProps, StackDirection } from "@chakra-ui/react";

export default interface IButtonProps extends ButtonProps {
    startEnhancer?: React.ReactElement,
    startEnhancerHover?: React.ReactElement,
    endEnhancer?: React.ReactElement,
    endEnhancerHover?: React.ReactElement,
    hoverColor?: string,
    hoverBackgroundColor?: string,
    direction?: StackDirection,
    spacing?: string,
    children?: React.ReactElement | string;
    color?: string;
}
