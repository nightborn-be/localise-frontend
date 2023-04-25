import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import ITableHeaderProps from './props';
import SearchInput from '../../inputs/search-icon';
export default function TableHeader({
    firstColTitle,
    secondColTitle,
    thirdColTitle,
}: ITableHeaderProps) {
    //Attributes
    const [value, setValue] = useState<string>('');

    //Render
    return (
        <HStack
            w='full'
            h={'2.75rem'}
            alignItems='flex-start'
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
            ></HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.InputText.value}
                >
                    {firstColTitle}
                </Text>
            </HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.InputText.value}
                >
                    {secondColTitle}
                </Text>
            </HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.InputText.value}
                >
                    {thirdColTitle}
                </Text>
            </HStack>

            <HStack
                padding='0.5rem 0.5rem 0.5rem 1.25rem'
                spacing='0.25rem'
                w='full'
                h='2.75rem'
                alignItems={'center'}
                justifyContent={'right'}
            >
                <SearchInput
                    color={COLORS.Text.T400.value}
                    padding='0.25rem 0.625rem'
                    gap='0.5rem'
                    placeholderColor={COLORS.InputText.value}
                    borderRadius='0.375rem'
                    placeholder='Type to search...'
                    value={value}
                    onChange={(value) => setValue(value.target.value)}
                />
            </HStack>
        </HStack>
    );
}
