import React, { cloneElement, useState } from 'react';
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
    hoverColor,
    hoverBackgroundColor,
    spacing,
    onClick,
    direction = 'row',
    whiteSpace,
    ...rest
}: IButtonProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>();
    const handleMouseOver = () => setIsHovered((prev) => !prev);
    const handleMouseLeave = () => setIsHovered((prev) => !prev);
    // Render
    return (
        <ChakraButton
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            value={text}
            onClick={onClick}
            _hover={{
                bgColor: hoverBackgroundColor,
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
                    alignItems='center'
                    justifyContent='center'
                    spacing={spacing}
                    pointerEvents='none'
                >
                    {rest.startEnHancer && (
                        <Stack align={'start'}>
                            {isHovered && hoverColor
                                ? cloneElement(
                                      rest.startEnHancer,
                                      rest.changeIconBackground
                                          ? {
                                                color: hoverColor,
                                            }
                                          : {
                                                stroke: hoverColor,
                                                fill: hoverColor,
                                            },
                                  )
                                : rest.startEnHancer}
                        </Stack>
                    )}
                    <Text
                        textAlign={rest.textAlign}
                        lineHeight={rest.lineHeight}
                        fontSize={rest.fontSize}
                        color={isHovered ? hoverColor : rest.color}
                        fontFamily='Inter'
                        fontStyle='normal'
                    >
                        {text}
                    </Text>
                    {rest.endEnHancer && (
                        <Stack align={'end'}>
                            {isHovered && hoverColor
                                ? cloneElement(
                                      rest.endEnHancer,
                                      rest.changeIconBackground
                                          ? {
                                                color: hoverColor,
                                            }
                                          : {
                                                stroke: hoverColor,
                                                fill: hoverColor,
                                            },
                                  )
                                : rest.endEnHancer}
                        </Stack>
                    )}
                </HStack>
            ) : (
                <VStack
                    direction={'row'}
                    alignItems='center'
                    justifyContent='center'
                    spacing={spacing}
                    pointerEvents='none'
                >
                    {rest.startEnHancer && (
                        <Stack align={'start'}>
                            {isHovered && hoverColor
                                ? cloneElement(
                                      rest.startEnHancer,
                                      rest.changeIconBackground
                                          ? {
                                                color: hoverColor,
                                            }
                                          : {
                                                stroke: hoverColor,
                                                fill: hoverColor,
                                            },
                                  )
                                : rest.startEnHancer}
                        </Stack>
                    )}
                    <Text
                        textAlign={rest.textAlign}
                        lineHeight={rest.lineHeight}
                        fontSize={rest.fontSize}
                        color={
                            isHovered && hoverColor ? hoverColor : rest.color
                        }
                        whiteSpace={whiteSpace}
                        fontFamily='Inter'
                        fontStyle='normal'
                    >
                        {text}
                    </Text>
                    {rest.endEnHancer && (
                        <Stack align={'end'}>
                            {isHovered && hoverColor
                                ? cloneElement(
                                      rest.endEnHancer,
                                      rest.changeIconBackground
                                          ? {
                                                color: hoverColor,
                                            }
                                          : {
                                                stroke: hoverColor,
                                                fill: hoverColor,
                                            },
                                  )
                                : rest.endEnHancer}
                        </Stack>
                    )}
                </VStack>
            )}
        </ChakraButton>
    );
}
