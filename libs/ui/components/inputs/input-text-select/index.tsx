import React, { useState } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import InputSelect from '../input-select';
import IInputSelectAndInputProps from './props';
import Input from '../input';
import ButtonIcon from '../button-icon';
import { ButtonSize } from '../button-icon/props';
import { motion } from 'framer-motion';
import InputLabel from '../input-label';

export default function InputSelectAndInput<T>({
    selectProps,
    inputProps,
    label,
    description,
    h,
    w,
    border = `0.0625rem solid ${COLORS.Line.value}`,
    borderRadius = '0.5rem',
    alignItems,
    isValid = true,
    errorBorder = `1px solid ${COLORS.Negative.value}`,
    rightIcon,
    rightHoverIcon,
}: IInputSelectAndInputProps<T>) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);

    //Render
    return (
        <VStack
            direction='column'
            spacing='0.5rem'
            w={w}
            h={h}
            alignItems={alignItems}
        >
            {/* INPUT LABEL SECTION */}
            <InputLabel label={label} description={description} />

            {/* INPUT SECTION */}
            <HStack
                w={w}
                h={h}
                border={isValid ? border : errorBorder}
                borderRadius={borderRadius}
                px='0.75rem'
                spacing={0}
                justifyContent='space-between'
                paddingRight='8px'
                paddingLeft='12px'
                transition='marginRight 2s'
                marginRight='200px'
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                position='relative'
            >
                {/* INPUT FIELD SECTION */}
                <Input {...inputProps} />

                {/* SELECT SECTION */}
                <motion.div
                    initial={false}
                    animate={{
                        translateX: isHovered ? -40 : 0,
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
                        selectMarginLeft={isHovered ? '30px' : '0px'}
                    />
                </motion.div>

                {/* BUTTON RIGHT SECTION */}
                {rightIcon && (
                    <Box position='absolute' left='287px'>
                        <motion.div
                            initial={false}
                            animate={{
                                opacity: isHovered ? 1 : 0,
                            }}
                            transition={{ ease: 'easeOut', duration: 0.5 }}
                        >
                            <ButtonIcon
                                borderRadius='0.375rem'
                                padding='0.25rem'
                                gap='0.625rem'
                                backgroundColor='transparent'
                                displayIcon={(isHovered) =>
                                    isHovered && rightHoverIcon
                                        ? rightHoverIcon
                                        : rightIcon
                                }
                                hoverBackgroundColor={COLORS.Tag.value}
                                size={ButtonSize.SMALL}
                                aria-label=''
                            />
                        </motion.div>
                    </Box>
                )}
            </HStack>
        </VStack>
    );
}
