import React, { useState } from 'react';
import { Button as ChakraButton, Stack } from '@chakra-ui/react';
import IButtonProps from './props';
import ButtonChildren from '../button-children';
import ButtonStartEnhancer from '../button-start-enhancer';
import ButtonEndEnhancer from '../button-end-enhancer';

export default function Button({
    hoverBackgroundColor,
    spacing,
    onClick,
    direction = 'row',
    whiteSpace,
    fontFamily = 'Inter',
    fontStyle = 'normal',
    children,
    startEnhancer,
    startEnhancerHover,
    endEnhancer,
    endEnhancerHover,
    color,
    hoverColor = color,
    ...rest
}: IButtonProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>();
    const updateHoverState = () => setIsHovered((prev) => !prev);

    const paddingCondition = () => {
        if (direction !== 'row') {
            return 'auto';
        }

        if (startEnhancer) {
            return '4px 12px 4px 8px';
        } else if (endEnhancer) {
            return '4px 8px 4px 12px';
        } else {
            return '4px 12px';
        }
    };

    // Render
    return (
        <ChakraButton
            onMouseOver={updateHoverState}
            onMouseLeave={updateHoverState}
            onClick={onClick}
            _hover={{
                bgColor: hoverBackgroundColor,
            }}
            padding={paddingCondition()}
            gap={rest.gap ?? '4px'}
            {...rest}
        >
            <Stack
                direction={direction}
                alignItems='center'
                justifyContent='center'
                spacing={spacing}
                pointerEvents='none'
            >
                <ButtonStartEnhancer
                    isHovered={isHovered}
                    startEnhancer={startEnhancer}
                    startEnhancerHover={startEnhancerHover}
                    {...rest}
                />

                <ButtonChildren
                    fontSize={rest.fontSize}
                    fontWeight={rest.fontWeight}
                    hoverColor={hoverColor}
                    textAlign={rest.textAlign}
                    lineHeight={rest.lineHeight}
                    direction={direction}
                    whiteSpace={whiteSpace}
                    isHovered={isHovered}
                    color={color}
                >
                    {children}
                </ButtonChildren>

                <ButtonEndEnhancer
                    isHovered={isHovered}
                    endEnhancer={endEnhancer}
                    endEnhancerHover={endEnhancerHover}
                />
            </Stack>
        </ChakraButton>
    );
}
