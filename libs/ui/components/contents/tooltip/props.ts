import { TooltipProps } from "@chakra-ui/react";

export interface ITooltipProps extends TooltipProps {
    type?: TooltipType
    command?: React.ReactElement
}



export enum TooltipType {
    DEFAULT, COMMAND
}   