import React from 'react';
import { ITabProps } from './props';
import COLORS from '../../../../constants/colors';
import Text from '../../../contents/text';
import FONTS from '../../../../constants/fonts';
import { Box } from '@chakra-ui/react';

const Tab = ({ children, onSelect, active }: ITabProps): JSX.Element => {
    // Render
    return (
        <Box cursor='pointer' onClick={onSelect}>
            <Text
                font={FONTS.T1.T12px.Medium500.value}
                color={active ? COLORS.Text.T400.value : COLORS.InputText.value}
            >
                {children}
            </Text>
        </Box>
    );
};

export default Tab;
