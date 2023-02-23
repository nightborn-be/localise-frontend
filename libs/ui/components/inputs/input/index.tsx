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
    color,
    border,
    placeholderColor,
    placeholder,
    h,
    w,
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
                alignItems='left'
            >
                {props.labelPrimary ? (
                    <Text
                        font={FONTS.T1.T12px.Medium500.value}
                        lineHeight={props.lineHeight ?? '15px'}
                        color={color ?? COLORS.Text.T500.value}
                        margin={0}
                    >
                        {props.labelPrimary}
                    </Text>
                ) : (
                    <></>
                )}
                {props.labelSecondary ? (
                    <Text
                        font={FONTS.T1.T12px.Regular400.value}
                        lineHeight={props.lineHeight ?? '15px'}
                        color={placeholderColor ?? COLORS.InputText.value}
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
                        letterSpacing={type === 'password' ? '5px' : '0px'}
                        _placeholder={{
                            color: placeholderColor,
                            fontWeight: props.fontWeight,
                            fontSize:
                                type === 'password' ? '12px' : props.fontSize,
                            lineHeight: '15px',
                            letterSpacing: '0px',
                        }}
                        focusBorderColor={props.focusBorderColor ?? 'false'}
                        errorBorderColor={
                            props.errorBorderColor ?? COLORS.Negative.value
                        }
                        border={border ?? '1px solid ' + COLORS.Stroke.value}
                        color={color ?? COLORS.Text.T500.value}
                        fontSize={props.fontSize ?? '12px'}
                        fontWeight={props.fontWeight ?? '500'}
                        lineHeight={props.lineHeight ?? '15px'}
                        marignTop={props.marginTop}
                    />
                </InputGroup>
            </VStack>
        </>
    );
}
