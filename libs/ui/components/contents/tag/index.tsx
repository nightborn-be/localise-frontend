import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../text';
import { ITagProps } from './props';
import ButtonIcon from '../../inputs/button-icon';
import Icon from '../icon';
import { ButtonSize } from '../../inputs/button-icon/types';
const Tag = <T,>({
    h = '1.75rem',
    w = 'fit-content',
    gap = '0.25rem',
    padding = '0.375rem 0.625rem',
    backgroundColor = COLORS.Line.value,
    borderRadius = '2.25rem',
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
            spacing='0.125rem'
            w={w}
            h={h}
            borderRadius={borderRadius}
            padding={padding}
            paddingRight={isHovered ? '0.25rem' : undefined}
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
