import React from 'react';
import IInputProps from './props';
import {
    FormLabel,
    Input as ChakraInput,
    InputGroup,
    VStack,
} from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
export default function Input({
    type = 'text',
    color = COLORS.Text.T500.value,
    colorLabelPrimary = COLORS.Text.T500.value,
    colorLabelSecondary = COLORS.InputText.value,
    border = '1px solid ' + COLORS.Stroke.value,
    placeholderColor = COLORS.InputText.value,
    placeholder,
    h,
    w,
    lineHeight = '15px',
    errorBorderColor = COLORS.Negative.value,
    fontSize = '12px',
    fontWeight = '500',
    alignItems = 'left',
    ...props
}: IInputProps) {
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
                {props.labelPrimary ? (
                    <Text
                        font={FONTS.T1.T12px.Medium500.value}
                        lineHeight={lineHeight}
                        color={colorLabelPrimary}
                        margin={0}
                    >
                        {props.labelPrimary}
                    </Text>
                ) : (
                    <></>
                )}
                {props.labelSecondary ? (
                    <Text
                        font={FONTS.T1.T12px.Medium500.value}
                        lineHeight={lineHeight}
                        color={colorLabelSecondary}
                        margin={0}
                    >
                        {props.labelSecondary}
                    </Text>
                ) : (
                    <></>
                )}
                <InputGroup>
                    <ChakraInput
                        {...props}
                        type={type}
                        isInvalid={props.isInvalid}
                        placeholder={placeholder}
                        _placeholder={{
                            color: placeholderColor,
                            fontWeight: fontWeight,
                            fontSize: fontSize,
                            lineHeight: lineHeight,
                        }}
                        focusBorderColor={props.focusBorderColor ?? 'false'}
                        errorBorder={errorBorderColor}
                        border={props.isInvalid ? '' : border}
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
