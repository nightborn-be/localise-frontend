import React, { useState, useRef } from 'react';
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
    marginLeft = '9.375rem',
    backgroundColor = COLORS.BG.value,
    inputWidth = '5.9375rem',
    inputHeight = '0.9375rem',
    inputBorder = 'transparent',
    inputBorderRadius = '0rem',
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
            <HStack
                onClick={() => setLaunchAnime(true)}
                ref={boxRef}
                w={'1.75rem'}
                h={'1.75rem'}
                flexWrap={'wrap'}
            >
                <motion.div
                    initial={{ translateX: 0, display: 'flex' }}
                    animate={
                        launchAnime
                            ? { translateX: -100, display: 'flex' }
                            : { translateX: 0, display: 'flex' }
                    }
                    transition={{
                        ease: 'easeOut',
                        duration: 0.5,
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
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        animate={
                            launchAnime
                                ? {
                                      opacity: 1,
                                      display: 'flex',
                                  }
                                : {
                                      opacity: 0,
                                      display: 'flex',
                                  }
                        }
                        transition={{
                            ease: 'easeOut',
                            duration: 0.2,
                        }}
                    >
                        <Input
                            autoFocus={launchAnime}
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
            </HStack>
        </HStack>
    );
};
export default SearchInput;
