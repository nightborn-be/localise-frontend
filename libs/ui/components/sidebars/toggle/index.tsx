import React from 'react';
import { HStack, Switch } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import ToggleProps from './props';

export default function Toggle({}: ToggleProps) {
    return (
        <HStack>
            <Text
                font={FONTS.T1.T12px.Regular400.value}
                color={COLORS.Text.T400.value}
            >
                Detect duplicates
            </Text>
            <Switch />
        </HStack>
    );
}
