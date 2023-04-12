import React, { useState } from 'react';
import {
    Box,
    Flex,
    InputGroup,
    InputRightElement,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import * as CSS from 'csstype';
import { IInputTextAreaFieldProps } from './props';
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
    value,
    name,
    onChange,
    ...props
}: IInputTextAreaFieldProps<T>) {
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
        <VStack
            position={'relative'}
            direction='column'
            spacing={'12px'}
            w={w}
            h={'fit-content'}
            minH={'fit-content'}
        >
            {/* Input field section */}
            <Textarea
                position={'relative'}
                padding={'8px'}
                overflow='hidden'
                w={w}
                h={'fit-content'}
                minH={'fit-content'}
                border={
                    visibility === 'visible'
                        ? hoverBorder
                        : '1px solid transparent'
                }
                borderRadius='6px'
                _hover={{
                    border: borderCondition,
                }}
                gap={gap}
                resize='none'
                paddingTop='0px'
                value={value}
                onChange={(e) => {
                    onChange && onChange(e.currentTarget.value);
                }}
                name={name as string}
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
                    event.key === 'Enter' ? event.currentTarget.blur() : null
                }
            />
            <Flex
                position={'absolute'}
                visibility={visibility}
                w={'full'}
                gap='0.125rem'
                borderRadius='0.25rem'
                alignItems={'center'}
                justifyContent={'right'}
                right='6px'
                bottom={'4px'}
            >
                {rightElement}
            </Flex>
        </VStack>
    );
}
