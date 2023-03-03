import React, { useState, useRef } from 'react';
import { Box, HStack, InputGroup, InputLeftElement } from '@chakra-ui/react';
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
    const backgroundCondition = (isFocused: boolean, isSelected: boolean) => {
        if (isSelected) return selectProps?.backgroundOptionColor;
        if (isFocused && isHovered)
            return selectProps?.focusBackgroundOptionColor;
        return 'none';
    };
    const [isHovered, setIsHovered] = useState(false);

    const toggleIsHovered = () => {
        setIsHovered((prev) => !prev);
    };
    const Option = (props) => {
        return (
            <components.Option {...props}>
                <Box w='8px' h='8px' borderRadius='2px' bg={props.data.color} />
                {props.children}
            </components.Option>
        );
    };
    const selectStyle: any = {
        control: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...FONTS.T1.T12px.Regular400.value,
                color: color,
                marginRight: '10px',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                marginLeft: '12px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
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
                padding: '6px 8px 20px',
                gap: '12px',
                width: '240px',
                height: '370px',
                minWidth: '240px',
                minHeight: '370px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                borderRadius: '0px',
                boxShadow: 'transparent',
                position: 'absolute',
                left: '-20px',
                marginTop: '0px',
            };
        },
        option: (
            styles,
            { data, isHovered, isDisabled, isFocused, isSelected },
        ) => {
            return {
                ...styles,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '228px',
                height: '40px',
                padding: '12px',
                gap: '12px',
                ':active': { backgroundColor: 'none' },
                backgroundColor: backgroundCondition(isFocused, isSelected),
                ...FONTS.T1.T12px.Medium500.value,
                borderRadius: selectProps?.borderRadiusOption,
                color: isSelected
                    ? selectProps?.selectedOptionColor
                    : selectProps?.textOptionColor,
            };
        },
        input: (styles) => ({
            visibility: 'visible',
            flex: '1 1 auto',
            display: 'inline-grid',
            gridArea: '1/1/2/3',
            margin: '2px',
            paddingBottom: '2px',
            paddingTop: '2px',
        }),
        singleValue: (styles, state) => ({
            ...styles,
            color: color,
        }),
        noOptionsMessage: (
            styles,
            { data, isHovered, isDisabled, isFocused, isSelected },
        ) => {
            return {
                ...styles,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                padding: '12px',
                gap: '12px',
                width: '228px',
                height: '40px',
                ':active': { backgroundColor: 'none' },
                ...FONTS.T1.T12px.Medium500.value,
                borderRadius: selectProps?.borderRadiusOption,
                color: COLORS.InputText.value,
            };
        },
    };

    const DropdownIndicator = (props) => {
        return <></>;
    };
    return (
        <InputGroup
            padding={padding}
            gap={gap}
            w={w}
            minW={w}
            h={h}
            _focus={{ border: border }}
            _hover={{ border: border }}
            border={border}
            justifyContent='center'
            alignItems={'center'}
            borderRadius={borderRadius}
            bg={backgroundColor}
        >
            <InputLeftElement
                mt='6.5px'
                w={'16px'}
                h={'16px'}
                ml={marginLeftElement}
            >
                <Icon name='search' />
            </InputLeftElement>
            <HStack
                w={w}
                h={h}
                maxWidth={w}
                // onMouseEnter={toggleIsHovered}
                // onMouseLeave={toggleIsHovered}
            >
                <Select
                    menuIsOpen={true}
                    options={options}
                    placeholder={placeholder}
                    styles={{ ...selectStyle }}
                    components={{
                        IndicatorSeparator: () => null,
                        DropdownIndicator,
                        Option,
                    }}
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
