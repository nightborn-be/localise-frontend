import React, { useState } from 'react';
import { Button as ChakraButton, Stack } from '@chakra-ui/react';
import IButtonStartEnhancerProps from './props';

export default function ButtonStartEnhancer({
    isHovered,
    align = 'start',
    startEnhancer,
    startEnhancerHover,
}: IButtonStartEnhancerProps) {
    if (!startEnhancer) return <></>;
    //Attributes
    return (
        <Stack align={align}>
            {isHovered ? startEnhancerHover ?? startEnhancer : startEnhancer}
        </Stack>
    );
}
