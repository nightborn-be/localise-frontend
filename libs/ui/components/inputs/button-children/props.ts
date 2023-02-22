import { ButtonProps, StackDirection } from "@chakra-ui/react";

export default interface IButtonChildrenProps extends ButtonProps {
    hoverColor?: string,
    direction?: StackDirection,
    isHovered: boolean | undefined,
    children?: React.ReactElement | string;
    color?: string;
}