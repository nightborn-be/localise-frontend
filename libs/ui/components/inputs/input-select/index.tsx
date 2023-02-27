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
    backgroundOptionColor = COLORS.Stroke.value,
    borderRadius = '8px',
    padding,
    dropDownIndicator,
    paddingRight,
    paddingLeft,
    ...props
}: IInputSelectProps) {
    const textProps = { lineHeight: lineHeight, margin: 0 };
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
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? backgroundOptionColor : 'none',
                fontSize: fontSize,
                fontWeight: fontWeight,
                fontFamily: fontFamily,
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
        <VStack
            direction='column'
            spacing='4px'
            w={w ?? undefined}
            h={h}
            alignItems={alignItems}
        >
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
                    isSearchable={false}
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
