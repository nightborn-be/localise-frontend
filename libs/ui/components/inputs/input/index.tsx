import React from 'react';
import IInputProps from './props';
import { Input as ChakraInput, InputGroup, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
export default function Input({
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
    lineHeight = '15px',
    errorBorder = `1px solid ${COLORS.Negative.value}`,
    fontSize = '12px',
    fontWeight = '500',
    alignItems = 'left',
    isValid = true,
    ...props
}: IInputProps) {
    const textProps = { lineHeight: lineHeight, margin: 0 };
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
                        {...props}
                        type={type}
                        placeholder={placeholder}
                        _placeholder={{
                            color: placeholderColor,
                            fontWeight: fontWeight,
                            fontSize: fontSize,
                            lineHeight: lineHeight,
                        }}
                        focusBorderColor={props.focusBorderColor ?? 'false'}
                        border={isValid ? border : errorBorder}
                        _hover={{ borderColor: isValid ? border : errorBorder }}
                        color={color}
                        fontSize={fontSize}
                        fontWeight={fontWeight}
                        lineHeight={lineHeight}
                        marignTop={props.marginTop}
                    />
                </InputGroup>
            </VStack>
        </>
    );
}
