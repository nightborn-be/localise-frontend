import React from 'react';
import { VStack } from '@chakra-ui/react';
import Select, { components } from 'react-select';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import IInputSelectProps from './props';

export default function InputSelect({
    type = 'text',
    color = COLORS.Text.T500.value,
    labelColor = COLORS.Text.T500.value,
    descriptionColor = COLORS.InputText.value,
    placeholderColor = COLORS.InputText.value,
    label,
    description,
    border = `1px solid ${COLORS.Stroke.value}`,
    placeholder = 'Select value',
    h,
    w,
    lineHeight = '15px',
    errorBorder = `1px solid ${COLORS.Negative.value}`,
    alignItems = 'left',
    fontSize = '12px',
    fontWeight = '400',
    fontFamily = 'Inter',
    gap = '8px',
    paddingTop = '3px',
    isValid = true,
    options,
    dropdownArrowColor = COLORS.InputText.value,
    backgroundOptionColor = COLORS.Localize.Purple.T500.value,
    focusBackgroundOptionColor = COLORS.Tag.value,
    selectedOptionColor = COLORS.White.T500.value,
    textOptionColor = COLORS.Text.T400.value,
    borderRadiusOption = '4px',
    borderRadius = '8px',
    padding,
    dropDownIndicator,
    paddingRight,
    paddingLeft,
    menuOptionWidth,

    isSearchable = false,
    ...props
}: IInputSelectProps) {
    const textProps = { lineHeight: lineHeight, margin: 0 };

    const backgroundCondition = (isFocused: boolean, isSelected: boolean) => {
        if (isSelected) return backgroundOptionColor;
        if (isFocused) return focusBackgroundOptionColor;
        return 'none';
    };
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
                padding: '8px 6px 8px 6px',
            };
        },
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                marginTop: '4px',
                ':active': { backgroundColor: 'none' },
                backgroundColor: backgroundCondition(isFocused, isSelected),
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

    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                {dropDownIndicator}
            </components.DropdownIndicator>
        );
    };
    return (
        <VStack spacing='4px' w={w ?? undefined} h={h} alignItems={alignItems}>
            {label && (
                <Text
                    {...textProps}
                    font={FONTS.T1.T12px.Medium500.value}
                    color={labelColor}
                >
                    {label}
                </Text>
            )}
            {description && (
                <Text
                    {...textProps}
                    font={FONTS.T1.T12px.Regular400.value}
                    color={descriptionColor}
                >
                    {description}
                </Text>
            )}

            {options && (
                <Select
                    isSearchable={isSearchable}
                    options={options}
                    placeholder={placeholder}
                    styles={{ ...selectStyle }}
                    components={{
                        IndicatorSeparator: () => null,
                        DropdownIndicator,
                    }}
                />
            )}
        </VStack>
    );
}
