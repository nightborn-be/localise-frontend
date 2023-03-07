import React, { useState, cloneElement } from 'react';
import IInputProps from './props';
import { Box, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import SidebarProps from './props';
import ButtonIcon from '../../inputs/button-icon';
import ProjectColorPickerProps from './props';
import { ButtonSize } from '../../inputs/button-icon/props';
import Icon from '../../contents/icon';

export const ColorElement = ({ color }) => {
    return (
        <Box
            w={'14px'}
            h={'14px'}
            aria-label=''
            backgroundColor={color}
            borderRadius={'4px'}
            marginInlineStart='0px !important'
        />
    );
};
export default function ProjectColorPicker({}: ProjectColorPickerProps) {
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
            <ColorElement color={COLORS.Localize.Purple.T500.value} />
            <ColorElement color={COLORS.Success.T500.value} />
            <ColorElement color={COLORS.Warning.T500.value} />
            <ColorElement color={COLORS.Error.T500.value} />
            <ColorElement color={COLORS.Social.FacebookBlue.value} />
            <ColorElement color={COLORS.Bancontact.Payconiq.value} />
            <ColorElement color={COLORS.Visa.Yellow.value} />
            <ButtonIcon
                size={ButtonSize.XXS}
                aria-label=''
                borderRadius={'4px'}
                marginInlineStart='0px !important'
                backgroundColor='transparent'
                displayIcon={(isHovered) => (
                    <Icon name='add' stroke='#5F43E2' width='16' height='16' />
                )}
            />
        </HStack>
    );
}
