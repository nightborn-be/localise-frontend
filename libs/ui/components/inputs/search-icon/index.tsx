import React, { useState, useRef, useEffect } from 'react';
import { Box, HStack, Input } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';
import SearchInputProps from './props';
import ButtonIcon from '../button-icon';
import { motion } from 'framer-motion';
import useOnClickOutside from '../../../../utils/hooks';
import { ButtonSize } from '../button-icon/types';
const SearchInput = <T extends object>({
    color = COLORS.Text.T500.value,
    placeholderColor = COLORS.InputText.value,
    placeholder,
    marginLeft = '150px',
    backgroundColor = COLORS.BG.value,
    inputWidth = '95px',
    inputHeight = '15px',
    inputBorder = 'transparent',
    inputBorderRadius = '0px',
    value,
    onChange,
    ...props
}: SearchInputProps) => {
    // Attributes
    const [launchAnime, setLaunchAnime] = useState<boolean>(false);
    const boxRef = useRef<HTMLDivElement>(null);

    // Hooks
    useOnClickOutside(boxRef, () => setLaunchAnime(false));

    // Render
    return (
        <HStack ml={marginLeft}>
            <Box onClick={() => setLaunchAnime(true)} ref={boxRef}>
                <motion.div
                    initial={{ translateX: 0 }}
                    animate={
                        launchAnime ? { translateX: -50 } : { translateX: 0 }
                    }
                    transition={{
                        ease: 'easeOut',
                        duration: 0.3,
                    }}
                >
                    <ButtonIcon
                        size={ButtonSize.XS}
                        backgroundColor={COLORS.White.T500.value}
                        hoverBackgroundColor={COLORS.Tag.value}
                        aria-label=''
                    >
                        <Icon name='search' />
                    </ButtonIcon>
                    <motion.div
                        initial={{
                            translateX: 0,
                            opacity: 0,
                            display: 'inline',
                        }}
                        animate={
                            launchAnime
                                ? {
                                      translateX: -50,
                                      opacity: 1,
                                      display: 'inline',
                                  }
                                : {
                                      translateX: 0,
                                      opacity: 0,
                                      display: 'inline',
                                  }
                        }
                        transition={{
                            ease: 'easeOut',
                            duration: 0.3,
                        }}
                    >
                        <Input
                            variant={'unstyled'}
                            value={value}
                            onChange={onChange}
                            w={inputWidth}
                            h={inputHeight}
                            borderRadius={inputBorderRadius}
                            focusBorderColor='transparent'
                            border={inputBorder}
                            placeholder={placeholder}
                            _placeholder={{
                                color: COLORS.InputText.value,
                            }}
                            {...FONTS.T1.T12px.Regular400.value}
                            color={COLORS.Text.T400.value}
                        />
                    </motion.div>
                </motion.div>
            </Box>
        </HStack>
    );
};
export default SearchInput;