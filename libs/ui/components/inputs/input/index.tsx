import React, { useState } from 'react';
import { IInputProps } from './props';
import { Input as ChakraInput, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import * as CSS from 'csstype';
import InputLabel from '../input-label';
import Text from '../../contents/text/index';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';
import ButtonIcon from '../button-icon';
import { ButtonSize } from '../button-icon/types';
export default function Input<T>({
    type = 'text',
    color = COLORS.Text.T500.value,
    label,
    labelColor,
    labelFont,
    description,
    descriptionColor,
    descriptionFont,
    border = `0.0625rem solid ${COLORS.Stroke.value}`,
    placeholderColor = COLORS.InputText.value,
    placeholder,
    h,
    w,
    maxWidth,
    errorBorder = `0.0625rem solid ${COLORS.Error.T500.value}`,
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
    rightElementMarginRight,
    onFocus,
    onBlur,
    isDisabled,
    ...props
}: IInputProps<T>) {
    //Attributes
    const [visibility, setVisibility] =
        useState<CSS.Property.Visibility>('hidden');

    const [showPassword, setShowPassword] = useState<boolean>(false);
    function toggleShowPassword() {
        setShowPassword((prev) => !prev);
    }

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

    function getTypeInput(): string {
        if (type === 'password' && showPassword) {
            return 'visible';
        }
        return type;
    }

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
                <InputLabel
                    label={label ?? ''}
                    description={description}
                    labelColor={labelColor}
                    labelFont={labelFont}
                    descriptionColor={descriptionColor}
                    descriptionFont={descriptionFont}
                />
                {/* Input field section */}

                <HStack
                    bg={bg}
                    h={h}
                    w={w}
                    onFocus={handleToggleVisibility}
                    onBlur={handleToggleVisibility}
                    border={isValid ? border : errorBorder}
                    _focus={{
                        border: borderCondition,
                    }}
                    _hover={{
                        border: borderCondition,
                    }}
                    borderRadius={'0.5rem'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <ChakraInput
                        variant={'unstyled'}
                        disabled={isDisabled}
                        _disabled={{ color: color, ...font }}
                        padding={padding}
                        gap={gap}
                        value={value}
                        onChange={(e) => {
                            onChange && onChange(e.currentTarget.value);
                        }}
                        name={name as string}
                        type={getTypeInput()}
                        border={'transparent'}
                        placeholder={placeholder}
                        _placeholder={{
                            color: placeholderColor,
                            fontFamily: font?.fontFamily,
                            fontSize: font?.fontSize,
                            fontWeight: font?.fontWeight,
                            lineHeight: font?.lineHeight,
                        }}
                        focusBorderColor={'transparent'}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        color={color}
                        fontFamily={font?.fontFamily}
                        fontSize={font?.fontSize}
                        fontWeight={font?.fontWeight}
                        lineHeight={font?.lineHeight}
                        letterSpacing={font?.letterSpacing}
                        marginTop={marginTop}
                        pr={paddingRight ?? '0.25rem'}
                        paddingInlineStart={'0rem'}
                        paddingInlineEnd={'0rem'}
                        onKeyDown={(event) =>
                            event.key === 'Enter'
                                ? event.currentTarget.blur()
                                : ''
                        }
                    />
                    <HStack
                        visibility={visibility}
                        mr={`${rightElementMarginRight} !important`}
                        w='fit-content'
                    >
                        {rightElement}

                        {type === 'password' && (
                            <ButtonIcon
                                visibility={'visible'}
                                backgroundColor='transparent'
                                size={ButtonSize.XXS}
                                handleOnClick={toggleShowPassword}
                                mr='0.75rem'
                            >
                                <Icon
                                    name={
                                        showPassword ? 'eyesHide' : 'eyesShow'
                                    }
                                />
                            </ButtonIcon>
                        )}
                    </HStack>
                </HStack>
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
