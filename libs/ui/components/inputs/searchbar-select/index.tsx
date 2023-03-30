import React, { useState, useRef } from 'react';
import { HStack, Input, Stack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';
import SHADOWS from '../../../constants/shadows';
import useOnClickOutside from '../../../../utils/hooks';
import ISearchbarSelectProps from './props';
import Text from '../../contents/text';
import InputLabel from '../input-label';
const SearchbarSelect = <T,>({
    h,
    w,
    placeholder,
    filterValue,
    activeKey,
    onChange,
    onSelect,
    options,
    defaultSelectValue,
    label,
    description,
    value,
    name,
    ...props
}: ISearchbarSelectProps<T>) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const inputRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(inputRef, () => setShowModal(false));
    // Render
    return (
        <VStack alignItems={'left'} w={w} spacing='4px' position='relative'>
            <VStack spacing='12px' alignItems={'left'}>
                {/* Input label section */}
                {label && (
                    <InputLabel
                        label={label}
                        description={description}
                        labelColor={COLORS.Text.T400.value}
                        labelFont={FONTS.T1.T14px.Medium500.value}
                    />
                )}
                <HStack
                    border={`1px solid ${COLORS.Stroke.value}`}
                    borderRadius={'8px'}
                    padding='12px'
                    h={'40px'}
                    onClick={() => setShowModal(true)}
                >
                    <Text
                        font={FONTS.T1.T12px.Regular400.value}
                        color={
                            activeKey
                                ? COLORS.Text.T500.value
                                : COLORS.InputText.value
                        }
                        w={'full'}
                    >
                        {activeKey ? (activeKey as string) : defaultSelectValue}
                    </Text>
                    <Icon name='chevronDown' width='20' height='20' />
                </HStack>
            </VStack>
            <VStack
                ref={inputRef}
                position={'absolute'}
                top={'85px'}
                zIndex='2'
                spacing={'8px'}
                bg={COLORS.White.T500.value}
                h={'196px'}
                w={w}
                borderRadius={'8px'}
                boxShadow={SHADOWS.Elevation.Light.Bottom.T05.value}
                border={`1px solid ${COLORS.Line.value}`}
                padding='8px 6px 4px'
                overflowY={'scroll'}
                alignItems={'flex-start'}
                display={showModal ? 'visible' : 'none'}
            >
                <HStack
                    border={`1px solid ${COLORS.Line.value}`}
                    spacing={'8px'}
                    h={h}
                    bg={COLORS.BG.value}
                    padding={'4px 10px'}
                    borderRadius={'7px'}
                >
                    {/* Left input icon */}
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <Icon name='search' />
                    </Stack>

                    {/* Searchbar */}
                    <Input
                        {...FONTS.T1.T12px.Regular400.value}
                        justifyContent={'left'}
                        type={'text'}
                        color={COLORS.Text.T400.value}
                        onChange={onChange}
                        value={filterValue}
                        placeholder={placeholder}
                        backgroundColor={'transparent'}
                        _placeholder={{ color: COLORS.InputText.value }}
                        focusBorderColor='transparent'
                        border={'1px solid transprent'}
                        marginInlineStart='0'
                        paddingInlineStart='0'
                    />
                </HStack>
                <VStack
                    h='188px'
                    overflowY={'scroll'}
                    alignItems={'flex-start'}
                    spacing='4px'
                >
                    {options?.map((option, index) => {
                        const isSelected = activeKey === option.value;
                        return (
                            <Stack
                                key={index}
                                padding='12px'
                                width='100%'
                                h='32px'
                                justifyContent={'center'}
                                borderRadius='4px'
                                bg={
                                    isSelected
                                        ? COLORS.Localize.Purple.T500.value
                                        : COLORS.White.T500.value
                                }
                                _hover={{
                                    bg: isSelected
                                        ? COLORS.Localize.Purple.T500.value
                                        : COLORS.Tag.value,
                                }}
                                onClick={() => {
                                    onSelect?.(option.value);
                                }}
                            >
                                <Text
                                    font={FONTS.T1.T12px.Medium500.value}
                                    color={
                                        isSelected
                                            ? COLORS.White.T500.value
                                            : COLORS.Text.T500.value
                                    }
                                >
                                    {option.label}
                                </Text>
                            </Stack>
                        );
                    })}
                </VStack>
            </VStack>
        </VStack>
    );
};

export default SearchbarSelect;
