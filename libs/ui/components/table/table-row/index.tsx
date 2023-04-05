import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import ITableRowProps from './props';
import ButtonIcon from '../../inputs/button-icon';
import Icon from '../../contents/icon';
import { ButtonSize } from '../../inputs/button-icon/types';
import Avatar from '../../contents/avatar';
import Role from '../../contents/role';
export default function TableRow({
    avatarPicture,
    firstName,
    lastName,
}: ITableRowProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>('');

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
            >
                <Avatar
                    name={firstName?.charAt(0) + lastName?.charAt(0)}
                    imageSrc={avatarPicture}
                />
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
                <Role
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                />
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
                    >
                        {(isHovered) => (
                            <Icon
                                pointerEvents='none'
                                name={'removeSmall'}
                                stroke={
                                    isHovered
                                        ? COLORS.Error.T500.value
                                        : COLORS.InputText.value
                                }
                            />
                        )}
                    </ButtonIcon>
                )}
            </HStack>
        </HStack>
    );
}
