import React from 'react';
import IInputProps from './props';
import {
    FormLabel,
    Input as ChakraInput,
    InputGroup,
    VStack,
} from '@chakra-ui/react';
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
                    <FormLabel
                        fontSize={props.fontSize ?? '12px'}
                        fontWeight='500'
                        lineHeight={props.lineHeight ?? '15px'}
                        color={color ?? '#080038'}
                        margin={0}
                    >
                        {props.labelPrimary}
                    </FormLabel>
                ) : (
                    ''
                )}
                {props.labelSecondary ? (
                    <FormLabel
                        fontSize={props.fontSize ?? '12px'}
                        fontWeight='500'
                        lineHeight={props.lineHeight ?? '15px'}
                        color={placeholderColor ?? '#8F95B2'}
                        margin={0}
                    >
                        {props.labelSecondary}
                    </FormLabel>
                ) : (
                    ''
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
                        errorBorderColor={props.errorBorderColor ?? '#F46363'}
                        border={border ?? '1px solid #E9EAF0'}
                        color={color ?? '#080038'}
                        fontSize={props.fontSize ?? '12px'}
                        fontWeight={props.fontWeight ?? '500'}
                        lineHeight={props.lineHeight ?? '15px'}
                    />
                </InputGroup>
            </VStack>
        </>
    );
}
