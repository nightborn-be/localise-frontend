import React, { useState } from 'react';
import { IInputProps } from './props';
import {
    Input as ChakraInput,
    InputGroup,
    InputRightElement,
    VStack,
} from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import * as CSS from 'csstype';
import InputLabel from '../input-label';
import Text from '../../contents/text/index';
import FONTS from '../../../constants/fonts';
export default function Input<T>({
    type = 'text',
    color = COLORS.Text.T500.value,
    label,
    description,
    border = `1px solid ${COLORS.Stroke.value}`,
    placeholderColor = COLORS.InputText.value,
    placeholder,
    h,
    w,
    maxWidth,
    errorBorder = `1px solid ${COLORS.Negative.value}`,
    font,
    hoverBorder,
    alignItems = 'left',
    rightElement,
    paddingRight,
    isValid = true,
    focusBorderColor,
    marginTop,
    padding,
    gap,
    zIndex,
    value,
    name,
    onChange,
    bg,
    errorMsg,
    isTouched,
    ...props
}: IInputProps<T>) {
    //Attributes
    const [visibility, setVisibility] =
        useState<CSS.Property.Visibility>('hidden');

    //Function
    const handleToggleVisibility = () => {
        if (visibility === 'hidden') setVisibility('visible');
        if (visibility === 'visible') setVisibility('hidden');
    };

    const borderCondition = (): string => {
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
                spacing='0.5rem'
                h={h}
                w={w}
                maxWidth={maxWidth}
                alignItems={alignItems}
                zIndex={zIndex}
            >
                {/* Input label section */}
                <InputLabel label={label} description={description} />
                {/* Input field section */}

                <InputGroup bg={bg}>
                    <ChakraInput
                        padding={padding}
                        gap={gap}
                        value={value}
                        onChange={(e) => {
                            onChange && onChange(e.currentTarget.value);
                        }}
                        name={name as string}
                        type={type}
                        placeholder={placeholder}
                        _placeholder={{
                            color: placeholderColor,
                            fontSize: font?.fontSize,
                            fontWeight: font?.fontWeight,
                            lineHeight: font?.lineHeight,
                        }}
                        _focus={{
                            border: borderCondition,
                        }}
                        focusBorderColor={'transparent'}
                        border={isValid ? border : errorBorder}
                        _hover={{
                            border: borderCondition,
                        }}
                        color={color}
                        fontFamily={font?.fontFamily}
                        fontSize={font?.fontSize}
                        fontWeight={font?.fontWeight}
                        lineHeight={font?.lineHeight}
                        letterSpacing={font?.letterSpacing}
                        marginTop={marginTop}
                        onFocus={handleToggleVisibility}
                        onBlur={handleToggleVisibility}
                        pr={paddingRight ?? '0.25rem'}
                        paddingInlineStart={'0rem'}
                        paddingInlineEnd={'0rem'}
                        onKeyDown={(event) =>
                            event.key === 'Enter'
                                ? event.currentTarget.blur()
                                : ''
                        }
                    />
                    <InputRightElement visibility={visibility} mr={'0.5rem'}>
                        {rightElement}
                    </InputRightElement>
                </InputGroup>
                {errorMsg && isTouched ? (
                    <Text
                        font={FONTS.T1.T12px.Regular400.value}
                        color={COLORS.Error.T500.value}
                    >
                        {errorMsg}
                    </Text>
                ) : null}
            </VStack>
        </>
    );
}
