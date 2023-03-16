import { ButtonProps, StackDirection } from "@chakra-ui/react";

export interface IButtonChildrenProps extends ButtonProps {
    hoverColor?: string,
    direction?: StackDirection,
    isHovered: boolean,
    children?: React.ReactElement | string;
    color?: string;
}