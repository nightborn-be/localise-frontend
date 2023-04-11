import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import { ITableRowTermProps } from './props';
import Button from '../../../../../../../components/inputs/button';
import { ButtonSize } from '../../../../../../../components/inputs/button-icon/types';
import COLORS from '../../../../../../../constants/colors';
import FONTS from '../../../../../../../constants/fonts';
import Text from '../../../../../../../components/contents/text';
import Input from '../../../../../../../components/inputs/input';
import Icon from '../../../../../../../components/contents/icon';
import SearchInput from '../../../../../../../components/inputs/search-icon/index';
import ButtonIcon from 'ui/components/inputs/button-icon';

export default function TableHeaderTerm({}: ITableRowTermProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [value, setValue] = useState<string>('');
    //Render
    return (
        <HStack
            w='full'
            h={'2.75rem'}
            alignItems='flex-start'
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            border={'transparent'}
            borderRadius='0.5rem'
            spacing={0}
        >
            <HStack
                padding='0.5rem 0rem 0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
                h='44px'
                alignItems={'center'}
                justifyContent={'left'}
            >
                <Text
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.InputText.value}
                >
                    Key name
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
                    Source language
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
                    Target language
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
                <Button
                    font={FONTS.T1.T12px.Regular400.value}
                    backgroundColor='transparent'
                    hoverBackgroundColor={COLORS.Disabled.value}
                    height='1.75rem'
                    padding='0.375rem 0.5rem'
                    gap='0.25rem'
                    borderRadius='0.25rem'
                    color={COLORS.InputText.value}
                    hoverColor={COLORS.Localize.Purple.T500.value}
                >
                    Sort
                </Button>

                <ButtonIcon
                    aria-label=''
                    borderRadius='0.375rem'
                    size={ButtonSize.SMALL}
                    padding='0.25rem'
                    gap='0.625rem'
                    backgroundColor={COLORS.White.T500.value}
                    hoverBackgroundColor={COLORS.Stroke.value}
                >
                    <Icon
                        pointerEvents='none'
                        name={'more'}
                        fill={COLORS.InputText.value}
                    />
                </ButtonIcon>
            </HStack>
        </HStack>
    );
}
