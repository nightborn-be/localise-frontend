import React, { useState } from 'react';
import { IInputProps } from './props';
import { useTranslation } from 'react-i18next';
import {
    Input as ChakraInput,
    InputGroup,
    InputRightElement,
    VStack,
} from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import * as CSS from 'csstype';
import InputLabel from '../input-label';
import { tKeys } from '../../../../i18n/keys';
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
    ...props
}: IInputProps<T>) {
    //Attributes
    const { t } = useTranslation();
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
                spacing='0.25rem'
                h={h}
                w={w}
                maxWidth={maxWidth}
                alignItems={alignItems}
                zIndex={zIndex}
            >
                {/* Input label section */}
                <InputLabel
                    label={t(tKeys.common.test)}
                    description={description}
                />

                {/* Input field section */}
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
                        pr={paddingRight ?? '4px'}
                        paddingInlineStart={'0px'}
                        paddingInlineEnd={'0px'}
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
            </VStack>
        </>
    );
}
