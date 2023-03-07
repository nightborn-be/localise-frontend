import React from 'react';
import { Box } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import TagProps from './props';
export default function Tag({
    h = '28px',
    w = 'fit-content',
    gap = '4px',
    padding = '6px 10px',
    backgroundColor = COLORS.Line.value,
    borderRadius = '36px',
    font,
    value,
    color = COLORS.Text.T400.value,
    ...props
}: TagProps) {
    //Render
    return (
        <Box
            bg={backgroundColor}
            w={w}
            h={h}
            borderRadius={borderRadius}
            padding={padding}
            gap={gap}
            mr='-3px'
        >
            <Text {...font} color={color}>
                {value}
            </Text>
        </Box>
    );
}
