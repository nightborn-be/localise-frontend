import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../../../../../constants/colors';
import Text from '../../../../../../contents/text';
import FONTS from '../../../../../../../constants/fonts';
import ButtonIcon from '../../../../../../inputs/button-icon';
import Icon from '../../../../../../contents/icon';
import { ButtonSize } from '../../../../../../inputs/button-icon/types';
import Avatar from '../../../../../../contents/avatar';
import Role from '../../../../../../contents/role';
import ITableRowMembersProps from './props';
export default function TableRowMembers({
    avatarPicture,
    email,
    role,
}: ITableRowMembersProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>(role);
    //Render
    return (
        <HStack
            w='full'
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
                w='9.375rem'
                h='2.75rem'
                alignItems={'right'}
                justifyContent={'right'}
            >
                <Avatar
                    name={email?.charAt(0).toUpperCase()}
                    imageSrc={avatarPicture}
                />
            </HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text
                    font={FONTS.T1.T12px.Regular400.value}
                    color={COLORS.Text.T400.value}
                >
                    {email}
                </Text>
            </HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
                h='2.75rem'
                alignItems={'center'}
            ></HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
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
                w='full'
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
                        backgroundColor={COLORS.White.T500.value}
                        hoverBackgroundColor={COLORS.Tag.value}
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
