import React from 'react';
import COLORS from '../../../../constants/colors';
import Text from '../../../contents/text';
import FONTS from '../../../../constants/fonts';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { ITabTitleProps } from './props';

export const TabTitle = ({
    title,
    onSelect,
    active,
    datacy,
}: ITabTitleProps) => {
    // Render
    return (
        <VStack
            justify='space-between'
            cursor='pointer'
            onClick={onSelect}
            data-cy={datacy}
        >
            <Text
                font={FONTS.T1.T12px.Medium500.value}
                color={active ? COLORS.Text.T400.value : COLORS.InputText.value}
                px='.25rem'
            >
                {title}
            </Text>
        </VStack>
    );
};

export default TabTitle;
