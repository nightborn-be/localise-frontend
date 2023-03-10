import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import TagProps from './props';
import ButtonIcon from '../button-icon';
import Icon from '../../contents/icon';
import { ButtonSize } from '../button-icon/props';
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
    onClick,
}: TagProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    //Render
    return (
        <HStack
            bg={backgroundColor}
            spacing='6px'
            w={w}
            h={h}
            borderRadius={borderRadius}
            padding={padding}
            paddingRight={isHovered ? '4px' : undefined}
            gap={gap}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Text {...font} color={color}>
                {value}
            </Text>

            {isHovered && (
                <ButtonIcon
                    aria-label=''
                    borderRadius='100%'
                    size={ButtonSize.XXS}
                    backgroundColor={COLORS.Text.T400.value}
                    displayIcon={() => <Icon name='union' />}
                    handleOnClick={onClick}
                />
            )}
        </HStack>
    );
}
