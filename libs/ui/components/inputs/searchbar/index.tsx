import React, { useState, useRef } from 'react';
import {
    Box,
    Button,
    HStack,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import Select, { components } from 'react-select';
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
    options,
    borderRadius = '6px',
    padding,
    paddingRight,
    paddingLeft,
    isSearchable = false,
    marginLeftElement = '10px',
    backgroundColor = COLORS.BG.value,
    selectProps,
    ...props
}: SearchbarProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState(false);

    const selectStyle: any = {
        control: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...FONTS.T1.T12px.Regular400.value,
                color: color,
                marginRight: '10px',
                marginLeft: '18px',
                padding: '4px 12px 4px 10px',
                gap: '8px',
            };
        },
        placeholder: (styles) => {
            return {
                ...styles,
                color: placeholderColor,
            };
        },
        menu: (styles, state) => {
            return {
                ...styles,
                gap: '12px',
                boxShadow: 'transparent',
            };
        },
        menuList: (styles, state) => {
            return {
                ...styles,
                '::-webkit-scrollbar': {
                    display: 'none',
                },
                width: '228px',
                maxHeight: '378px',
            };
        },
        option: (
            styles,
            { data, isHovered, isDisabled, isFocused, isSelected },
        ) => {
            return {
                ...styles,
                display: 'flex',
                marginTop: '8px',
                flexDirection: 'row',
                alignItems: 'center',
                height: '40px',
                gap: '12px',
                ':active': { backgroundColor: 'none' },
                backgroundColor: backgroundOptionColor(isFocused, isSelected),
                ...FONTS.T1.T12px.Medium500.value,
                borderRadius: selectProps?.borderRadiusOption,
                color: isSelected
                    ? selectProps?.selectedOptionColor
                    : selectProps?.textOptionColor,
            };
        },
        input: (
            styles,
            { data, isHovered, isDisabled, isFocused, isSelected },
        ) => ({
            gridArea: '1/1/2/3',
            input: {
                opacity: '1 !important',
            },
        }),
        singleValue: (
            styles,
            { data, isHovered, isDisabled, isFocused, isSelected },
        ) => ({
            ...styles,
            color: color,
        }),
        noOptionsMessage: (
            styles,
            { data, isHovered, isDisabled, isFocused, isSelected },
        ) => {
            return {
                ...styles,
                ':active': { backgroundColor: 'none' },
                ...FONTS.T1.T12px.Medium500.value,
                borderRadius: selectProps?.borderRadiusOption,
                color: COLORS.InputText.value,
            };
        },
    };

    //Function
    const backgroundOptionColor = (isFocused: boolean, isSelected: boolean) => {
        if (isSelected) return selectProps?.backgroundOptionColor;
        if (isFocused && isHovered)
            return selectProps?.focusBackgroundOptionColor;
        return 'none';
    };

    const Option = (props) => {
        return (
            <components.Option {...props}>
                <Box w='8px' h='8px' borderRadius='2px' bg={props.data.color} />
                {props.children}
            </components.Option>
        );
    };

    const Menu = (props) => {
        return (
            <Box
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <components.Menu {...props}></components.Menu>
            </Box>
        );
    };
    return (
        <InputGroup
            w={w}
            h={h}
            minW={w}
            padding={padding}
            gap={gap}
            _focus={{ border: border }}
            _hover={{ border: border }}
            border={border}
            justifyContent='center'
            alignItems={'center'}
            borderRadius={borderRadius}
            bg={backgroundColor}
        >
            {/* Left input icon */}
            <InputLeftElement
                w={'16px'}
                h={'16px'}
                mt='6.5px'
                ml={marginLeftElement}
            >
                <Icon name='search' />
            </InputLeftElement>

            {/* Searchbar */}
            <HStack w={w} h={h} minWidth={w} minHeight={h}>
                <Select
                    menuIsOpen={true}
                    options={options}
                    placeholder={placeholder}
                    styles={{ ...selectStyle }}
                    components={{
                        IndicatorSeparator: () => null,
                        DropdownIndicator: () => null,
                        Option,
                        Menu,
                    }}
                    controlShouldRenderValue={false}
                    noOptionsMessage={(data) => {
                        return `No projects found for ${data.inputValue}`;
                    }}
                />
            </HStack>
            {/* <Input
                {...FONTS.T1.T12px.Regular400.value}
                ref={input}
                w={w}
                minW={w}
                maxW={w}
                placeholder={placeholder}
                backgroundColor={'transparent'}
                _placeholder={{ color: placeholderColor }}
                focusBorderColor='transparent'
                _focus={{ border: '1px solid transprent' }}
                _hover={{ border: '1px solid transprent' }}
                border={'1px solid transprent'}
                onFocus={() => {
                    setIsVisible(false);
                }}
                marginRight='10px'
                onBlur={toggleOnBlurIsVisible}
            /> */}
        </InputGroup>
    );
}
