import React, { useState } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import InputSelect from '../input-select';
import IInputSelectAndInputProps from './props';
import Input from '../input';
import ButtonIcon from '../button-icon';
import { ButtonSize } from '../button-icon/props';

export default function InputSelectAndInput({
    selectProps,
    inputProps,
    labelColor = COLORS.Text.T500.value,
    descriptionColor = COLORS.InputText.value,
    label,
    description,
    h,
    w,
    border = `0.0625rem solid ${COLORS.Line.value}`,
    borderRadius = '0.5rem',
    alignItems,
    lineHeight,
    isValid = true,
    errorBorder = `1px solid ${COLORS.Negative.value}`,
    leftIcon,
    ...props
}: IInputSelectAndInputProps) {
    const textProps = { lineHeight: lineHeight, margin: 0 };
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const toggleIsHovered = () => setIsHovered((prev) => !prev);
    return (
        <>
            <VStack
                direction='column'
                spacing='0.25rem'
                w={w}
                h={h}
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
                <HStack
                    w={w}
                    h={h}
                    border={isValid ? border : errorBorder}
                    borderRadius={borderRadius}
                    px='0.75rem'
                    spacing={0}
                    justifyContent='space-between'
                    paddingRight={leftIcon ? '0.375rem' : '1.1019rem'}
                    paddingLeft='8px'
                    transition='marginRight 2s'
                    marginRight='200px'
                    onMouseOver={() => toggleIsHovered()}
                    onMouseLeave={() => toggleIsHovered()}
                >
                    {/* <Input {...inputProps} borderRadius={0} flexGrow={1} /> */}
                    <InputSelect
                        {...selectProps}
                        borderRadius={0}
                        menuOptionWidth='120px'
                        w='fit-content'
                        h='fit-content'
                        minW={'12.5rem'}
                        menuRightOption='0px'
                        position={'absolute'}
                        transform={
                            isHovered ? 'translateX(-70px)' : 'translateX(0)'
                        }
                    />
                    {leftIcon ? (
                        <ButtonIcon
                            borderRadius='0.375rem'
                            padding='0.25rem'
                            gap='0.625rem'
                            backgroundColor='transparent'
                            icon={leftIcon}
                            size={ButtonSize.SMALL}
                            aria-label=''
                        ></ButtonIcon>
                    ) : null}
                </HStack>
            </VStack>
            <Box
                h='75px'
                w='150px'
                bg='blue'
                display={'flex'}
                transition='margin-right 2s'
                justifyContent={'end'}
                onMouseOver={() => toggleIsHovered()}
                onMouseLeave={() => toggleIsHovered()}
            >
                <Box
                    h='25px'
                    w='25px'
                    bg='green'
                    zIndex={0}
                    position='absolute'
                ></Box>
                <Box
                    h='50px'
                    w='50px'
                    bg='red'
                    transition='transform 2s'
                    zIndex='10'
                    transform={
                        isHovered ? 'translateX(-70px)' : 'translateX(0)'
                    }
                ></Box>
            </Box>
        </>
    );
}
