import React from 'react';
import { ITabProps } from './props';
import COLORS from '../../../../constants/colors';
import Text from '../../../contents/text';
import FONTS from '../../../../constants/fonts';

const Tab = ({ children, onSelect, active }: ITabProps): JSX.Element => {
    // Render
    return (
        <Text
            cursor='pointer'
            onClick={onSelect}
            font={FONTS.T1.T12px.Medium500.value}
            color={active ? COLORS.Text.T400.value : COLORS.InputText.value}
        >
            {children}
        </Text>
    );
};

export default Tab;
