import React, { useState, useEffect } from 'react';
import {
    Box,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';
import SearchIconProps from './props';
import ButtonIcon from '../button-icon';
import { ButtonSize } from '../button-icon/props';
import {
    motion,
    useAnimation,
    useAnimationControls,
    useCycle,
} from 'framer-motion';
export default function SearchIcon({
    type = 'text',
    color = COLORS.Text.T500.value,
    placeholderColor = COLORS.InputText.value,
    border = `1px solid ${COLORS.Line.value}`,
    placeholder = 'Search for a project',
    h,
    w,
    alignItems = 'left',
    gap = '8px',
    paddingTop = '3px',
    borderRadius = '6px',
    padding,
    paddingRight,
    paddingLeft,
    marginLeftElement = '10px',
    backgroundColor = COLORS.BG.value,
    ...props
}: SearchIconProps) {
    //Attributes
    const [animate, cycle] = useCycle({ translateX: 0 }, { translateX: -50 });
    const [animateText, cycleText] = useCycle(
        { translateX: 0, opacity: 0, display: 'inline' },
        { translateX: -50, opacity: 1, display: 'inline' },
    );
    const [launchAnime, setLaunchAnime] = useState<boolean>(false);
    const toggleLaunchAnime = () => {
        setLaunchAnime((prev) => !prev);
    };

    const animationControls = useAnimationControls();
    function sequence() {
        animationControls.start(animate);
        animationControls.start(animateText);
    }
    const allAnimation = {};
    //Render
    return (
        <HStack w={w} h={h} minWidth={w} minHeight={h} ml='150px'>
            <Box onClick={toggleLaunchAnime}>
                <motion.div
                    animate={animate}
                    transition={{
                        ease: 'easeOut',
                        onDurationChange: 0.5,
                    }}
                >
                    <ButtonIcon
                        size={ButtonSize.XS}
                        displayIcon={(isHovered) => <Icon name='search' />}
                        backgroundColor={COLORS.White.T500.value}
                        hoverBackgroundColor={COLORS.Tag.value}
                        aria-label=''
                    />
                    <motion.div
                        animate={animateText}
                        transition={{
                            ease: 'easeOut',
                            onDurationChange: 0.5,
                        }}
                    >
                        <Input
                            variant={'unstyled'}
                            w={'95px'}
                            h={'15px'}
                            borderRadius='0px'
                            focusBorderColor='transparent'
                            border='transparent'
                            placeholder={'Type to search...'}
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
