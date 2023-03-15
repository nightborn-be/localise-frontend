import React, { useState } from 'react';
import { HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import SearchbarProps from './props';
import Icon from '../../contents/icon';
const Searchbar = <T extends object>({
    type = 'text',
    placeholderColor = COLORS.InputText.value,
    border = `1px solid ${COLORS.Line.value}`,
    placeholder,
    h,
    w,
    alignItems = 'left',
    gap = '8px',
    paddingTop = '3px',
    borderRadius = '6px',
    padding,
    marginLeftElement = '10px',
    backgroundColor = COLORS.BG.value,
    value,
    onChange,
    ...props
}: SearchbarProps) => {
    // Render
    return (
        <HStack w={w} h={h} minWidth={w} minHeight={h}>
            <InputGroup
                w={w}
                h={h}
                border={border}
                justifyContent='center'
                alignItems={'center'}
                borderRadius={borderRadius}
                padding={padding}
                gap={gap}
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
                />
            </InputGroup>
        </HStack>
    );
};

export default Searchbar;