import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import { ITableRowTermProps } from './props';
import ButtonIcon from '../../../../../../../components/inputs/button-icon';
import { ButtonSize } from '../../../../../../../components/inputs/button-icon/types';
import COLORS from '../../../../../../../constants/colors';
import FONTS from '../../../../../../../constants/fonts';
import Text from '../../../../../../../components/contents/text';
import Input from '../../../../../../../components/inputs/input';
import Icon from '../../../../../../../components/contents/icon';

export default function TableRowTerm({
    keyName,
    sourceLanguage,
    targetLanguage,
}: ITableRowTermProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>('');

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
                w='full'
                h='44px'
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Input
                    placeholder={keyName}
                    border='transparent'
                    w={'21.25rem'}
                    value={keyName}
                    onChange={() => {}}
                    name=''
                    color={COLORS.Text.T400.value}
                    font={FONTS.T1.T12px.Regular400.value}
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
                    {sourceLanguage}
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
                    font={FONTS.T1.T12px.Regular400.value}
                    color={COLORS.Text.T400.value}
                >
                    {targetLanguage}
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
                        name={'expand'}
                        fill={COLORS.InputText.value}
                    />
                </ButtonIcon>
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
                        name={'arrowUp'}
                        fill={COLORS.InputText.value}
                    />
                </ButtonIcon>
            </HStack>
        </HStack>
    );
}
