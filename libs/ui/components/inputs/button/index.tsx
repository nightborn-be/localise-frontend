import React from 'react';
import {
    Button as ChakraButton,
    HStack,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import IButtonProps from './props';

export default function Button({
    text,
    hoverTextColor,
    hoverBackgroundColor,
    spacing,
    onClick,
    direction = 'row',
    ...rest
}: IButtonProps) {
    // Render
    return (
        <ChakraButton
            value={text}
            onClick={onClick}
            _hover={{
                bgColor: hoverBackgroundColor,
                textColor: hoverTextColor,
            }}
            {...rest}
        >
            {direction === 'row' ? (
                <HStack direction={'row'} align-item='center' spacing={spacing}>
                    {rest.startEnHancer && (
                        <Stack align={'start'}>{rest.startEnHancer}</Stack>
                    )}
                    <Text
                        textAlign={rest.textAlign}
                        lineHeight={rest.lineHeight}
                        fontSize={rest.fontSize}
                        color={rest.color}
                    >
                        {text}
                    </Text>
                    {rest.endEnHancer && (
                        <Stack align={'end'}>{rest.endEnHancer}</Stack>
                    )}
                </HStack>
            ) : (
                <VStack direction={'row'} align-item='center' spacing={spacing}>
                    {rest.startEnHancer && (
                        <Stack align={'start'}>{rest.startEnHancer}</Stack>
                    )}
                    <Text
                        textAlign={rest.textAlign}
                        lineHeight={rest.lineHeight}
                        fontSize={rest.fontSize}
                        color={rest.color}
                    >
                        {text}
                    </Text>
                    {rest.endEnHancer && (
                        <Stack align={'end'}>{rest.endEnHancer}</Stack>
                    )}
                </VStack>
            )}
        </ChakraButton>
    );
}
