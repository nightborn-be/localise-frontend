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
    whiteSpace,
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
            padding={
                direction !== 'row' ||
                (rest.startEnHancer === undefined &&
                    rest.endEnHancer === undefined)
                    ? ''
                    : rest.startEnHancer
                    ? '4px 12px 4px 8px'
                    : '4px 8px 4px 12px'
            }
            gap='4px'
            {...rest}
        >
            {direction === 'row' ? (
                <HStack
                    direction={'row'}
                    align-item='center'
                    justify-content='center'
                    spacing={spacing}
                >
                    {rest.startEnHancer && (
                        <Stack align={'start'}>{rest.startEnHancer}</Stack>
                    )}
                    <Text
                        textAlign={rest.textAlign}
                        lineHeight={rest.lineHeight}
                        fontSize={rest.fontSize}
                        color={rest.color}
                        fontFamily='Inter'
                        fontStyle='normal'
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
                        whiteSpace={whiteSpace}
                        fontFamily='Inter'
                        fontStyle='normal'
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
