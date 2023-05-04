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
    noValueMsg,
    ...props
}: ISearchbarSelectProps<T>) => {
    // Attributes
    const [showModal, setShowModal] = useState<boolean>(false);
    const inputRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(inputRef, () => setShowModal(false));

    // Render
    return (
        <VStack alignItems={'left'} w={w} spacing='0.75rem' position='relative'>
            <VStack spacing='0.75rem' alignItems={'left'}>
                {/* Input label section */}
                {label && (
                    <InputLabel
                        label={label}
                        description={description}
                        labelColor={COLORS.Text.T400.value}
                        labelFont={FONTS.T1.T14px.Medium500.value}
                    />
                )}
            </VStack>
            <VStack w={w} ref={inputRef} spacing='0.25rem'>
                <HStack
                    border={`0.0625rem solid ${COLORS.Stroke.value}`}
                    borderRadius={'0.5rem'}
                    padding='0.75rem'
                    h={'2.5rem'}
                    onClick={() => {
                        setShowModal((prev) => !prev);
                    }}
                    w={'full'}
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
                <VStack
                    position={'absolute'}
                    top={'5.3125rem'}
                    zIndex='2'
                    spacing={'0.5rem'}
                    bg={COLORS.White.T500.value}
                    h={'fit-content'}
                    maxH='12.25rem'
                    w={w}
                    minW={'full'}
                    borderRadius={'0.5rem'}
                    boxShadow={SHADOWS.Elevation.Light.Bottom.T05.value}
                    border={`0.0625rem solid ${COLORS.Line.value}`}
                    padding='0.5rem 0.375rem 0.25rem'
                    overflowY={'hidden'}
                    alignItems={'flex-start'}
                    display={showModal ? 'visible' : 'none'}
                >
                    <HStack
                        border={`0.0625rem solid ${COLORS.Line.value}`}
                        spacing={'0.5rem'}
                        h={h}
                        bg={COLORS.BG.value}
                        padding={'0.25rem 0.625rem'}
                        borderRadius={'0.4375rem'}
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
                            border={'0.0625rem solid transprent'}
                            marginInlineStart='0'
                            paddingInlineStart='0'
                        />
                    </HStack>
                    <VStack
                        maxH={'11.75rem'}
                        overflowY={'scroll'}
                        alignItems={'flex-start'}
                        spacing='0.25rem'
                    >
                        {!!options?.length ? (
                            options?.map((option, index) => {
                                const isSelected = activeKey === option.value;
                                return (
                                    <Stack
                                        key={index}
                                        padding='0.75rem'
                                        width='100%'
                                        h='2rem'
                                        justifyContent={'center'}
                                        borderRadius='0.25rem'
                                        bg={
                                            isSelected
                                                ? COLORS.Localize.Purple.T500
                                                      .value
                                                : COLORS.White.T500.value
                                        }
                                        _hover={{
                                            bg: isSelected
                                                ? COLORS.Localize.Purple.T500
                                                      .value
                                                : COLORS.Tag.value,
                                        }}
                                        onClick={() => {
                                            onSelect?.(option.value as string);
                                            setShowModal(false);
                                        }}
                                    >
                                        <Text
                                            font={
                                                FONTS.T1.T12px.Medium500.value
                                            }
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
                            })
                        ) : (
                            <Text
                                padding={'0.75rem'}
                                font={FONTS.T1.T12px.Medium500.value}
                                color={COLORS.InputText.value}
                            >
                                {noValueMsg}
                            </Text>
                        )}
                    </VStack>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default SearchbarSelect;
