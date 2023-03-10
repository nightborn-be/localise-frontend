import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import ITableRowProps from './props';
import ButtonIcon from '../../inputs/button-icon';
import { ButtonSize } from '../../inputs/button-icon/props';
import Icon from '../../contents/icon';

export default function TableRow({
    avatar,
    firstName,
    lastName,
    role,
}: ITableRowProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    //Render
    return (
        <HStack
            w='fit-content'
            h={'2.75rem'}
            alignItems='flex-start'
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            border={`0.0625rem solid ${COLORS.Line.value}`}
            borderRadius='0.5rem'
            spacing={0}
        >
            <HStack
                padding='0.5rem 0rem 0.5rem 1.25rem'
                spacing='0.625rem'
                w='3rem'
                h='2.75rem'
                alignItems={'center'}
            >
                {avatar}
            </HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='14.3125rem'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text
                    font={FONTS.T1.T12px.Regular400.value}
                    color={COLORS.Text.T400.value}
                >
                    {firstName}
                </Text>
            </HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='15.3125rem'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text
                    font={FONTS.T1.T12px.Regular400.value}
                    color={COLORS.Text.T400.value}
                >
                    {lastName}
                </Text>
            </HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='13.5rem'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text>{role}</Text>
            </HStack>
            <HStack
                padding='0.5rem 0.5rem 0.5rem 1.25rem'
                spacing='0.25rem'
                w='11.125rem'
                h='2.75rem'
                alignItems={'center'}
                justifyContent={'right'}
            >
                {isHovered && (
                    <ButtonIcon
                        aria-label=''
                        borderRadius='0.375rem'
                        size={ButtonSize.SMALL}
                        padding='0.25rem'
                        gap='0.625rem'
                        backgroundColor='#FFFFFF'
                        hoverBackgroundColor='#F2F4F9'
                        iconComponent={(isHovered) => (
                            <Icon
                                pointerEvents='none'
                                name={'removeSmall'}
                                stroke={isHovered ? '#F46363' : '#8F95B2'}
                            />
                        )}
                    />
                )}
            </HStack>
        </HStack>
    );
}
