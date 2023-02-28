import React, { useState } from 'react';
import IInputProps from './props';
import {
    Input as ChakraInput,
    InputGroup,
    InputRightElement,
    VStack,
} from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import * as CSS from 'csstype';
export default function Input<T>({
    type = 'text',
    color = COLORS.Text.T500.value,
    label,
    description,
    labelColor = COLORS.Text.T500.value,
    descriptionColor = COLORS.InputText.value,
    border = '1px solid ' + COLORS.Stroke.value,
    placeholderColor = COLORS.InputText.value,
    placeholder,
    h,
    w,
    errorBorder = `1px solid ${COLORS.Negative.value}`,
    font,
    hoverBorder,
    alignItems = 'left',
    rightElement,
    paddingRight,
    isValid = true,
    focusBorderColor,
    marginTop,
    paddingInlineStart,
    paddingInlineEnd,
    padding,
    gap,
    ...props
}: IInputProps<T>) {
    //Attributes
    const textProps = { lineHeight: font?.lineHeight, margin: 0 };
    const [visibility, setVisibility] =
        useState<CSS.Property.Visibility>('hidden');

    //function
    const handleToggleVisibility = () => {
        if (visibility === 'hidden') setVisibility('visible');
        if (visibility === 'visible') setVisibility('hidden');
    };
    const hoverCondition = (): string => {
        if (!isValid) {
            return errorBorder;
        }
        if (hoverBorder) {
            return hoverBorder;
        }
        return border;
    };
    // Render
    return (
        <>
            <VStack
                direction='column'
                spacing='4px'
                h={h}
                w={w}
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
                <InputGroup>
                    <ChakraInput
                        padding={padding}
                        gap={gap}
                        value={props.value}
                        onChange={props.onChange}
                        name={props.name as string}
                        type={type}
                        placeholder={placeholder}
                        _placeholder={{
                            color: placeholderColor,
                            fontSize: font?.fontSize,
                            fontWeight: font?.fontWeight,
                            lineHeight: font?.lineHeight,
                        }}
                        _focus={
                            focusBorderColor
                                ? { _hover: { border: 'none' } }
                                : undefined
                        }
                        focusBorderColor={focusBorderColor ?? 'false'}
                        border={isValid ? border : errorBorder}
                        _hover={{ border: hoverCondition }}
                        color={color}
                        fontFamily={font?.fontFamily}
                        fontSize={font?.fontSize}
                        fontWeight={font?.fontWeight}
                        lineHeight={font?.lineHeight}
                        letterSpacing={font?.letterSpacing}
                        marginTop={marginTop}
                        onFocus={handleToggleVisibility}
                        onBlur={handleToggleVisibility}
                        pr={paddingRight ?? '4px'}
                        paddingInlineStart={paddingInlineStart ?? 0}
                        paddingInlineEnd={paddingInlineEnd ?? 0}
                    />
                    <InputRightElement visibility={visibility} mr={'8px'}>
                        {rightElement}
                    </InputRightElement>
                </InputGroup>
            </VStack>
        </>
    );
}
