import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../text';
import { ITagProps } from './props';
import ButtonIcon from '../../inputs/button-icon';
import Icon from '../icon';
import { ButtonSize } from '../../inputs/button-icon/types';
const Tag = <T,>({
    h = '28px',
    w = 'fit-content',
    gap = '4px',
    padding = '6px 10px',
    backgroundColor = COLORS.Line.value,
    borderRadius = '36px',
    font,
    value,
    color = COLORS.Text.T400.value,
    onDelete,
}: ITagProps<T>) => {
    // Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    // Render
    return (
        <HStack
            bg={backgroundColor}
            spacing='2px'
            w={w}
            h={h}
            borderRadius={borderRadius}
            padding={padding}
            paddingRight={isHovered ? '4px' : undefined}
            gap={gap}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <>
                {typeof value === 'string' || 'number' ? (
                    <Text {...font} color={color}>
                        {value as string}
                    </Text>
                ) : (
                    { value }
                )}

                {isHovered && (
                    <ButtonIcon
                        aria-label=''
                        borderRadius='100%'
                        size={ButtonSize.XXS}
                        backgroundColor={COLORS.Text.T400.value}
                        handleOnClick={onDelete}
                    >
                        <Icon name='union' />
                    </ButtonIcon>
                )}
            </>
        </HStack>
    );
};

export default Tag;
