import React, { useState, useRef } from 'react';
import {
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
} from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import SearchbarProps from './props';
import Icon from '../../contents/icon';
import SHADOWS from '../../../constants/shadows';
import Checkbox from '../checkbox';
import useOnClickOutside from '../../../../utils/hooks';
import Text from '../../contents/text';

const Searchbar = <T,>({
    type = 'text',
    placeholderColor = COLORS.InputText.value,
    border = `0.0625rem solid ${COLORS.Line.value}`,
    placeholder,
    h,
    w,
    alignItems = 'left',
    spacing = '0.5rem',
    paddingTop = '0.1875rem',
    borderRadius = '0.375rem',
    padding,
    marginLeftElement = '0.625rem',
    backgroundColor = COLORS.BG.value,
    value,
    values,
    onChange,
    onCheck,
    options,
    activeKeys,
    displayModal = true,
    noValueMsg,
    ...props
}: SearchbarProps<T>) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const inputRef = useRef<HTMLDivElement>(null);

    // Hooks
    useOnClickOutside(inputRef, () => setShowModal(false));
    // Render
    return (
        <VStack
            alignItems={'left'}
            ref={inputRef}
            w={'fit-content'}
            spacing={'0.25rem'}
            position='relative'
        >
            <HStack w={w} h={h} minWidth={w} minHeight={h} spacing={spacing}>
                <InputGroup
                    w={w}
                    h={h}
                    border={border}
                    justifyContent='center'
                    alignItems={'center'}
                    borderRadius={borderRadius}
                    padding={padding}
                    bg={backgroundColor}
                >
                    {/* Left input icon */}
                    <InputLeftElement
                        w={'1rem'}
                        h={'full'}
                        ml={'0.625rem'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Icon name='search' />
                    </InputLeftElement>

                    {/* Searchbar */}
                    <Input
                        type={type}
                        {...FONTS.T1.T12px.Regular400.value}
                        color={COLORS.Text.T400.value}
                        onChange={onChange}
                        value={value}
                        w={w}
                        minW={w}
                        placeholder={placeholder}
                        backgroundColor={'transparent'}
                        _placeholder={{ color: placeholderColor }}
                        focusBorderColor='transparent'
                        border={'0.0625rem solid transprent'}
                        marginRight='0.5rem'
                        onFocus={() => setShowModal(true)}
                        paddingInlineEnd='0.3125rem'
                    />
                </InputGroup>
            </HStack>
            {displayModal && (
                <VStack
                    position={'absolute'}
                    top={h}
                    display={showModal ? 'visible' : 'none'}
                    w={w}
                    maxH='11.75rem'
                    overflowY={'scroll'}
                    alignItems={'flex-start'}
                    bg={COLORS.White.T500.value}
                    borderRadius={'0.5rem'}
                    boxShadow={SHADOWS.Elevation.Light.Bottom.T05.value}
                    border={`0.0625rem solid ${COLORS.Line.value}`}
                    padding={'0.375rem'}
                    spacing='0.25rem'
                    zIndex={1}
                >
                    {!!options?.length ? (
                        options?.map((option, index) => {
                            return (
                                <Checkbox
                                    key={index}
                                    label={option.label}
                                    isSelected={activeKeys?.some(
                                        (checkedOption) =>
                                            checkedOption === option.value,
                                    )}
                                    onSelect={() => onCheck?.(option.value)}
                                />
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
            )}
        </VStack>
    );
};

export default Searchbar;
