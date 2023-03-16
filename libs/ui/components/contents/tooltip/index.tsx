import React from 'react';
import { Box, Tooltip as ChakraTooltip } from '@chakra-ui/react';
import { ITooltipProps, TooltipType } from './props';
import COLORS from '../../../constants/colors';

const Tooltip = ({
    color = COLORS.White.T500.value,
    backgroundColor = COLORS.Black.T400.value,
    type = TooltipType.DEFAULT,
    padding = '0.5rem',
    gap = '0.625rem',
    borderRadius = '0.375rem',
    label,
    placement = 'bottom',
    children,
    arrowSize = 7,
    fontSize = '0.625rem',
    fontWeight = '500',
    lineHeight = '0.75rem',
    command,
    ...props
}: ITooltipProps) => {
    // Render
    return (
        <ChakraTooltip
            display={'flex'}
            flexDirection={'row'}
            justifyContent='center'
            alignItems='center'
            hasArrow
            bg={backgroundColor}
            color={color}
            label={type === TooltipType.COMMAND ? [label, command] : label}
            borderRadius={borderRadius}
            padding={padding}
            gap={gap}
            placement={placement}
            arrowSize={7}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            {...props}
        >
            <Box w='fit-content'>{children}</Box>
        </ChakraTooltip>
    );
};
export default Tooltip;
