import React, { cloneElement } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { components } from 'react-select';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';
import { ICheckBoxProps } from './props';
import Text from '../../contents/text';
const Checkbox = ({ isSelected, label, onSelect }: ICheckBoxProps) => {
    // Render
    return (
        <HStack
            w='full'
            minH='32px'
            spacing={'12px'}
            onClick={onSelect}
            _hover={{ bg: COLORS.Tag.value }}
            borderRadius='6px'
        >
            <Box w='1rem' h='1rem' ms={'12px'}>
                <Icon name={isSelected ? 'checkboxOn' : 'checkboxOff'} />
            </Box>
            <Text
                font={FONTS.T1.T12px.Medium500.value}
                color={COLORS.Text.T400.value}
            >
                {label}
            </Text>
        </HStack>
    );
};

export default Checkbox;
