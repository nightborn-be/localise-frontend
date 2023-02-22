import { ButtonProps } from "@chakra-ui/react";

export default interface IButtonEndEnhancerProps extends ButtonProps {
    endEnhancer?: React.ReactElement,
    endEnhancerHover?: React.ReactElement,
    isHovered?: boolean | undefined;
    children?: React.ReactElement | string;
    align?: string;
}
