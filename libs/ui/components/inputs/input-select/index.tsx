import React from 'react';
import { VStack } from '@chakra-ui/react';
import Select from 'react-select';
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
    icon,
    isInvalid = false,
    options,
    dropdownArrowColor = COLORS.InputText.value,
    backgroundOptionColor = COLORS.Stroke.value,
    ...props
}: IInputSelectProps) {
    const textProps = { lineHeight: lineHeight, margin: 0 };
    const colourStyles: any = {
        control: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                h: h,
                w: w,
                border: isInvalid ? errorBorder : border,
                '&:hover': isInvalid ? errorBorder : border,
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
                color: color,
            };
        },

        dropdownIndicator: (
            base,
            { data, isDisabled, isFocused, isSelected },
        ) => ({
            ...base,
            color: dropdownArrowColor,
            '&:hover': { color: dropdownArrowColor },
        }),
    };
    return (
        <VStack
            direction='column'
            spacing='4px'
            w={w}
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

            <Select
                options={options}
                placeholder={placeholder}
                styles={colourStyles}
                components={{
                    IndicatorSeparator: () => null,
                }}
            />
        </VStack>
    );
}
