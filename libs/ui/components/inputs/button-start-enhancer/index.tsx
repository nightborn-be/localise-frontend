import React, { useState } from 'react';
import { Button as ChakraButton, Stack } from '@chakra-ui/react';
import IButtonStartEnhancerProps from './props';

export default function ButtonStartEnhancer({
    isHovered,
    align = 'start',
    startEnhancer,
    startEnhancerHover,
}: IButtonStartEnhancerProps) {
    //Renders
    if (!startEnhancer) return <></>;
    return (
        <Stack align={align}>
            {isHovered ? startEnhancerHover ?? startEnhancer : startEnhancer}
        </Stack>
    );
}
