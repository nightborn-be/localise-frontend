import React, { useState } from 'react';
import { Button as ChakraButton, Stack } from '@chakra-ui/react';
import IButtonProps from './props';
import ButtonChildren from '../button-children';

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
    endEnhancer,
    color,
    hoverColor = color,
    ...rest
}: IButtonProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const updateHoverState = () => setIsHovered((prev) => !prev);
    const enhancerProps = { isHovered };
    const paddingCondition = () => {
        if (direction !== 'row') {
            return 'auto';
        }

        if (startEnhancer) {
            return '0.25rem 0.75rem 0.25rem 0.5rem';
        } else if (endEnhancer) {
            return '0.25rem 0.5rem 0.25rem 0.75rem';
        } else {
            return '0.25rem 0.75rem';
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
            gap={rest.gap ?? '0.25rem'}
            {...rest}
        >
            <Stack
                direction={direction}
                alignItems='center'
                justifyContent='center'
                spacing={spacing}
                pointerEvents='none'
            >
                {startEnhancer ? startEnhancer(enhancerProps) : null}
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
                {endEnhancer ? endEnhancer(enhancerProps) : null}
            </Stack>
        </ChakraButton>
    );
}
