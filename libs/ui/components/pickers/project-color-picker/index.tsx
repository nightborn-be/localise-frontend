import React, { useState } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import ButtonIcon from '../../inputs/button-icon';
import ProjectColorPickerProps from './props';
import { ButtonSize } from '../../inputs/button-icon/props';
import Icon from '../../contents/icon';
export default function ProjectColorPicker({}: ProjectColorPickerProps) {
    //Attributes
    const [colors, setColors] = useState([
        COLORS.Localize.Purple.T500.value,
        COLORS.Success.T500.value,
        COLORS.Warning.T500.value,
        COLORS.Error.T500.value,
        COLORS.Social.FacebookBlue.value,
        COLORS.Bancontact.Payconiq.value,
        COLORS.Visa.Yellow.value,
    ]);
    //Functions
    const addNewColorPicker = (color) => {
        setColors((oldColor) => [...oldColor, color]);
    };
    //Render
    return (
        <HStack
            padding={'15px'}
            paddingBottom='18px'
            gap='12px'
            width='176px'
            height='fit-content'
            maxW='176px'
            border={`1px solid ${COLORS.Line.value}`}
            borderRadius={'8px'}
            flexWrap={'wrap'}
            alignContent={'space-between'}
            boxShadow='0px 2px 8px rgba(40, 41, 61, 0.04), 0px 26px 34px rgba(96, 97, 112, 0.06)'
        >
            {colors.map((color) => (
                <Box
                    w={'14px'}
                    h={'14px'}
                    aria-label=''
                    backgroundColor={color}
                    borderRadius={'4px'}
                    marginInlineStart='0px !important'
                />
            ))}
            <ButtonIcon
                size={ButtonSize.XXS}
                aria-label=''
                borderRadius={'4px'}
                marginInlineStart='0px !important'
                backgroundColor='transparent'
                displayIcon={(isHovered) => (
                    <Icon name='add' stroke='#5F43E2' width='16' height='16' />
                )}
                handleOnClick={() => {
                    addNewColorPicker(COLORS.Error.T500.value);
                }}
            />
        </HStack>
    );
}
