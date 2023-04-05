import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import ITableHeaderProps from './props';
import ButtonIcon from '../../inputs/button-icon';
import Icon from '../../contents/icon';
import { ButtonSize } from '../../inputs/button-icon/types';
import Avatar from '../../contents/avatar';
import Role from '../../contents/role';
import SearchInput from '../../inputs/search-icon';
export default function TableHeader({}: ITableHeaderProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [value, setValue] = useState<string>('');

    //Render
    return (
        <HStack
            w='fit-content'
            h={'2.75rem'}
            alignItems='flex-start'
            borderRadius='0.5rem'
            spacing={0}
        >
            <HStack
                padding='0.5rem 0rem 0.5rem 1.25rem'
                spacing='0.625rem'
                w='3rem'
                h='2.75rem'
            ></HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='14.3125rem'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.InputText.value}
                >
                    First name
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
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.InputText.value}
                >
                    Name
                </Text>
            </HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='13.5rem'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.InputText.value}
                >
                    Role
                </Text>
            </HStack>

            <HStack
                padding='0.5rem 0.5rem 0.5rem 1.25rem'
                spacing='0.25rem'
                w='fit-content'
                h='2.75rem'
                alignItems={'center'}
                justifyContent={'right'}
            >
                <SearchInput
                    color={COLORS.Text.T400.value}
                    padding='4px 10px'
                    gap='8px'
                    background={COLORS.White.T500.value}
                    placeholderColor={COLORS.InputText.value}
                    borderRadius='6px'
                    placeholder='Type to search...'
                    value={value}
                    onChange={(value) => setValue(value.target.value)}
                />
            </HStack>
        </HStack>
    );
}
