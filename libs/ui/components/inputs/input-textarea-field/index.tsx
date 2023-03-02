import React, { useState } from 'react';
import {
    Box,
    InputGroup,
    InputRightElement,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import * as CSS from 'csstype';
import InputTextAreaFieldProps from './props';
export default function InputTextAreaField<T>({
    color = COLORS.Text.T500.value,
    border = `1px solid ${COLORS.Stroke.value}`,
    placeholderColor = COLORS.InputText.value,
    placeholder,
    h,
    w,
    maxWidth,
    font,
    hoverBorder,
    rightElement,
    paddingRight,
    padding,
    gap,
    ...props
}: InputTextAreaFieldProps<T>) {
    //Attributes
    const [visibility, setVisibility] =
        useState<CSS.Property.Visibility>('hidden');

    //Function
    const handleToggleVisibility = () => {
        if (visibility === 'hidden') setVisibility('visible');
        if (visibility === 'visible') setVisibility('hidden');
    };

    const borderCondition = (): string => {
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
                maxWidth={maxWidth}
            >
                {/* INPUT FIELD SECTION */}
                <InputGroup>
                    <Box
                        padding={padding}
                        gap={gap}
                        resize='none'
                        w={w}
                        maxW={w}
                        minH={h}
                        border={
                            visibility === 'visible'
                                ? hoverBorder
                                : '1px solid transparent'
                        }
                        borderRadius='6px'
                        _hover={{
                            border: borderCondition,
                        }}
                    >
                        <Textarea
                            overflow='hidden'
                            gap={gap}
                            resize='none'
                            paddingTop='0px'
                            border='transparent'
                            borderRadius='0'
                            height='80px'
                            value={props.value}
                            onChange={props.onChange}
                            name={props.name as string}
                            placeholder={placeholder}
                            _placeholder={{
                                color: placeholderColor,
                                fontSize: font?.fontSize,
                                fontWeight: font?.fontWeight,
                                lineHeight: font?.lineHeight,
                            }}
                            focusBorderColor='transparent'
                            color={color}
                            fontFamily={font?.fontFamily}
                            fontSize={font?.fontSize}
                            fontWeight={font?.fontWeight}
                            letterSpacing={font?.letterSpacing}
                            onFocus={handleToggleVisibility}
                            onBlur={handleToggleVisibility}
                            paddingInlineStart='0px'
                            paddingInlineEnd='0px'
                            onKeyDown={(event) =>
                                event.key === 'Enter'
                                    ? event.currentTarget.blur()
                                    : ''
                            }
                        />
                    </Box>
                    <InputRightElement
                        visibility={visibility}
                        mr='0.5rem'
                        padding='0'
                        gap='0.125rem'
                        w='38px'
                        h='12px'
                        borderRadius='0.25rem'
                        bottom='0.5rem'
                        top='93px'
                    >
                        {rightElement}
                    </InputRightElement>
                </InputGroup>
            </VStack>
        </>
    );
}
