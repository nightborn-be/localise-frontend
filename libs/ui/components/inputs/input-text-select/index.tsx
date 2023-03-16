import React, { useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import InputSelect from '../input-select';
import { IInputSelectAndInputProps } from './props';
import Input from '../input';
import ButtonIcon from '../button-icon';
import { motion } from 'framer-motion';
import InputLabel from '../input-label';
import { ButtonSize } from '../button-icon/types';

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
    menuOptionWidth = '200px',
    menuRightOption = '-44px',
    menuMinWOption = '12.5rem',
}: IInputSelectAndInputProps<T>) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const setIsHoveredToTrue = () => {
        setIsHovered(true);
    };

    const setIsHoveredToFalse = () => {
        setIsHovered(false);
    };

    const iconChoice = (isHovered): any => {
        if (isHovered && rightHoverIcon) return rightHoverIcon;
        return rightIcon;
    };
    //Render
    return (
        <VStack
            direction='column'
            spacing='0.5rem'
            w={w}
            h={h}
            alignItems={alignItems}
        >
            {/* Input label section */}
            <InputLabel label={label} description={description} />

            {/* Input section */}
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
                onMouseOver={setIsHoveredToTrue}
                onMouseLeave={setIsHoveredToFalse}
                position='relative'
            >
                {/* Input field section */}
                <Input {...inputProps} />

                {/* Select section */}
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
                        menuOptionWidth={menuOptionWidth}
                        menuRightOption={menuRightOption}
                        minW={menuMinWOption}
                        selectMarginLeft={isHovered ? '30px' : '0px'}
                    />
                </motion.div>

                {/* Button right section */}
                {rightIcon && (
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
                            hoverBackgroundColor={COLORS.Tag.value}
                            size={ButtonSize.XS}
                            aria-label=''
                            position='absolute'
                            right='8px'
                            top='5px'
                            bottom='6px'
                        >
                            {() => iconChoice(isHovered)}
                        </ButtonIcon>
                    </motion.div>
                )}
            </HStack>
        </VStack>
    );
}
