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
import Icon from '../../contents/icon';
import { motion } from 'framer-motion';

export default function InputSelectAndInput<T>({
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
    rightIcon,
    ...props
}: IInputSelectAndInputProps<T>) {
    const textProps = { lineHeight: lineHeight, margin: 0 };
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const toggleIsHovered = () => setIsHovered((prev) => !prev);
    const toggleIsFocused = () => setIsFocused((prev) => !prev);
    console.log('isHovered', isHovered);

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
                    paddingRight={rightIcon ? '0.375rem' : '1.1019rem'}
                    paddingLeft='8px'
                    transition='marginRight 2s'
                    marginRight='200px'
                    onMouseOver={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    position='relative'
                >
                    <Input {...inputProps} paddingInlineStart='4px' />
                    <motion.div
                        initial={false}
                        animate={{
                            translateX: isHovered || isFocused ? -40 : 0,
                        }}
                        transition={{ ease: 'easeOut', duration: 0.5 }}
                    >
                        <InputSelect
                            {...selectProps}
                            w='fit-content'
                            h='fit-content'
                            borderRadius={0}
                            menuOptionWidth='200px'
                            minW={'12.5rem'}
                            menuRightOption='-44px'
                        />
                    </motion.div>
                    {rightIcon ? (
                        // <Box position='absolute' left='287px'>
                        <motion.div
                            initial={false}
                            animate={{
                                opacity: isHovered || isFocused ? 1 : 0,
                            }}
                            transition={{ ease: 'easeOut', duration: 0.5 }}
                        >
                            <ButtonIcon
                                borderRadius='0.375rem'
                                padding='0.25rem'
                                gap='0.625rem'
                                backgroundColor='transparent'
                                displayIcon={(isHovered) => (
                                    <Icon
                                        name={'removeSmall'}
                                        pointerEvents='none'
                                        stroke={
                                            isHovered ? '#F46363' : '#8F95B2'
                                        }
                                    />
                                )}
                                hoverBackgroundColor={COLORS.Tag.value}
                                size={ButtonSize.SMALL}
                                aria-label=''
                                position={'absolute'}
                                top='0'
                                right='0'
                            />
                        </motion.div>
                    ) : // </Box>
                    null}
                </HStack>
            </VStack>
        </>
    );
}
