import React, { useState, useRef } from 'react';
import {
    Box,
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
const Searchbar = <T,>({
    type = 'text',
    placeholderColor = COLORS.InputText.value,
    border = `1px solid ${COLORS.Line.value}`,
    placeholder,
    h,
    w,
    alignItems = 'left',
    spacing = '8px',
    paddingTop = '3px',
    borderRadius = '6px',
    padding,
    marginLeftElement = '10px',
    backgroundColor = COLORS.BG.value,
    value,
    values,
    onChange,
    onCheck,
    options,
    activeKeys,
    ...props
}: SearchbarProps<T>) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const inputRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(inputRef, () => setShowModal(false));
    // Render
    return (
        <VStack
            alignItems={'left'}
            ref={inputRef}
            w={'fit-content'}
            spacing={'4px'}
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
                        w={'16px'}
                        h={h}
                        ml={'10px'}
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
                        border={'1px solid transprent'}
                        marginRight='8px'
                        onFocus={() => setShowModal(true)}
                    />
                </InputGroup>
            </HStack>
            <VStack
                display={showModal ? 'visible' : 'none'}
                w={w}
                h='188px'
                overflowY={'scroll'}
                alignItems={'flex-start'}
                bg={COLORS.White.T500.value}
                borderRadius={'8px'}
                boxShadow={SHADOWS.Elevation.Light.Bottom.T05.value}
                border={`1px solid ${COLORS.Line.value}`}
                padding={'6px'}
                spacing='4px'
            >
                {options?.map((option, index) => {
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
                })}
            </VStack>
        </VStack>
    );
};

export default Searchbar;
