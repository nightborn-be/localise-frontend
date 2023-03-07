import React, { useState, useRef, useEffect } from 'react';
import { Box, HStack, Input } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';
import SearchIconProps from './props';
import ButtonIcon from '../button-icon';
import { ButtonSize } from '../button-icon/props';
import { motion } from 'framer-motion';
export default function SearchIcon({
    color = COLORS.Text.T500.value,
    placeholderColor = COLORS.InputText.value,
    placeholder = 'Type to search...',
    h,
    w,
    marginLeft = '150px',
    backgroundColor = COLORS.BG.value,
    leftIcon = <Icon name='search' />,
    inputWidth = '95px',
    inputHeight = '15px',
    inputBorder = 'transparent',
    inputBorderRadius = '0px',
    ...props
}: SearchIconProps) {
    //Attributes
    const [launchAnime, setLaunchAnime] = useState<boolean>(false);
    const boxRef = useRef<HTMLDivElement>(null);

    //Functions
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                setLaunchAnime(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [boxRef]);

    //Render
    return (
        <HStack w={w} h={h} minWidth={w} minHeight={h} ml={marginLeft}>
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
                        displayIcon={(isHovered) => leftIcon}
                        backgroundColor={COLORS.White.T500.value}
                        hoverBackgroundColor={COLORS.Tag.value}
                        aria-label=''
                    />
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
}
