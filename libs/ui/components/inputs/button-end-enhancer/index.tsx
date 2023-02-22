import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import IButtonEndEnhancerProps from './props';

export default function ButtonEndEnhancer({
    isHovered,
    align = 'start',
    endEnhancer,
    endEnhancerHover,
}: IButtonEndEnhancerProps) {
    //Renders
    if (!endEnhancer) return <></>;
    return (
        <Stack align={align}>
            {isHovered ? endEnhancerHover ?? endEnhancer : endEnhancer}
        </Stack>
    );
}
