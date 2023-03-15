import React, { cloneElement } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import Select, { components } from 'react-select';
import COLORS from '../../../constants/colors';
import IInputSelectProps from './props';
import InputLabel from '../input-label';

export default function InputSelect({
    color = COLORS.Text.T500.value,
    placeholderColor = COLORS.InputText.value,
    label,
    description,
    border = `0.0625rem solid ${COLORS.Stroke.value}`,
    placeholder = 'Select value',
    h,
    w,
    errorBorder = `0.0625rem solid ${COLORS.Negative.value}`,
    alignItems = 'left',
    fontSize = '0.75rem',
    fontWeight = '400',
    fontFamily = 'Inter',
    isValid = true,
    options,
    dropdownArrowColor = COLORS.InputText.value,
    backgroundOptionColor = COLORS.Localize.Purple.T500.value,
    focusBackgroundOptionColor = COLORS.Tag.value,
    selectedOptionColor = COLORS.White.T500.value,
    textOptionColor = COLORS.Text.T400.value,
    borderRadiusOption = '0.25rem',
    borderRadius = '0.5rem',
    padding,
    dropDownIndicator,
    paddingRight,
    paddingLeft,
    menuOptionWidth,
    isSearchable = false,
    menuRightOption,
    menuLeftOption,
    selectMarginLeft,
}: IInputSelectProps) {
    //Attributes
    const selectStyle: any = {
        control: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                border: isValid ? border : errorBorder,
                borderRadius: borderRadius,
                '&:hover': isValid ? border : errorBorder,
                fontSize: fontSize,
                fontWeight: fontWeight,
                fontFamily: fontFamily,
                color: color,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                marginLeft: selectMarginLeft,
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
                width: menuOptionWidth ?? '100%',
                padding: '0rem 0.375rem 0.25rem 0.375rem',
                right: menuRightOption,
                left: menuLeftOption,
            };
        },
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '0.25rem',
                ':active': { backgroundColor: 'none' },
                backgroundColor: backgroundStyleSwitch(isFocused, isSelected),
                fontSize: fontSize,
                fontWeight: fontWeight,
                fontFamily: fontFamily,
                borderRadius: borderRadiusOption,
                color: isSelected ? selectedOptionColor : textOptionColor,
            };
        },
        input: (styles) => ({
            ...styles,
        }),
        singleValue: (styles, state) => ({
            ...styles,
            overflow: 'visible',
            color: color,
        }),
        dropdownIndicator: (
            base,
            { data, isDisabled, isFocused, isSelected },
        ) => ({
            ...base,
            color: dropdownArrowColor,
            backgroundColor: 'transparent',
            '&:hover': { color: dropdownArrowColor },
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
        }),
    };
    //Function
    const backgroundStyleSwitch = (isFocused: boolean, isSelected: boolean) => {
        if (isSelected) return backgroundOptionColor;
        if (isFocused) return focusBackgroundOptionColor;
        return 'none';
    };
    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                {dropDownIndicator}
            </components.DropdownIndicator>
        );
    };
    const Option = (props) => {
        return (
            <components.Option {...props}>
                {props.data.icon && (
                    <Box w='1rem' h='1rem' mr={'0.75rem'}>
                        {props.isSelected
                            ? cloneElement(props.data.icon, {
                                  fill: COLORS.White.T500.value,
                              })
                            : props.data.icon}
                    </Box>
                )}
                {props.data.value}
            </components.Option>
        );
    };

    //Render
    return (
        <VStack spacing='0.25rem' w={w} h={h} alignItems={alignItems}>
            {/* Input label section */}
            <InputLabel label={label} description={description} />

            {/* Input select section */}
            {options && (
                <Select
                    isSearchable={isSearchable}
                    options={options}
                    placeholder={placeholder}
                    styles={{ ...selectStyle }}
                    components={{
                        IndicatorSeparator: () => null,
                        DropdownIndicator,
                        Option: Option,
                    }}
                />
            )}
        </VStack>
    );
}
