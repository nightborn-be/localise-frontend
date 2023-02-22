import { ButtonProps } from "@chakra-ui/react";

export default interface IButtonStartEnhancerProps extends ButtonProps {
    startEnhancer?: React.ReactElement,
    startEnhancerHover?: React.ReactElement,
    isHovered?: boolean | undefined;
    children?: React.ReactElement | string;
    align?: string;
}
