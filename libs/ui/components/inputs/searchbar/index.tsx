import React, { useState } from 'react';
import { HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import SearchbarProps from './props';
import Icon from '../../contents/icon';
export default function Searchbar({
    type = 'text',
    color = COLORS.Text.T500.value,
    placeholderColor = COLORS.InputText.value,
    border = `1px solid ${COLORS.Line.value}`,
    placeholder = 'Search for a project',
    h,
    w,
    alignItems = 'left',
    gap = '8px',
    paddingTop = '3px',
    borderRadius = '6px',
    padding,
    paddingRight,
    paddingLeft,
    marginLeftElement = '10px',
    backgroundColor = COLORS.BG.value,
    ...props
}: SearchbarProps) {
    //Attributes
    const [searchValue, setSearchValue] = useState<string>('');
    //Render
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
                    onChange={(obj) => setSearchValue(obj.target.value)}
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
}
