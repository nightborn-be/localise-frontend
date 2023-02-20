import { ButtonProps } from "@chakra-ui/react";

export default interface IButtonProps extends ButtonProps {
    text: string,
    startEnHancer?: React.ReactElement,
    endEnHancer?: React.ReactElement,
    hoverColor?: string,
    hoverBackgroundColor?: string,
    direction?: string,
    spacing?: string,
    changeIconBackground?: boolean
}
