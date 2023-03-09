import React, { useState } from 'react';
import IRoleProps from './props';
import FONTS from '../../../constants/fonts';
import Text from '../text';
import { HStack } from '@chakra-ui/react';

export default function Role({
    text,
    color,
    backgroundColor,
}: IRoleProps) {
    // Render
    return (
        <HStack bg={backgroundColor}>
            <Text font={FONTS.T1.T12px.Medium500.value} color={color}>{text}</Text>
        </HStack>
    );
}
