import React from 'react';
import { VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import InputLabelProps from './props';

export default function InputLabel({
    label,
    description,
    lineHeight = '15px',
    margin = '0',
}: InputLabelProps) {
    //Attributes

    //Render
    if (!label && !description) return <></>;
    return (
        <VStack spacing='0.25rem' align='left'>
            {label && (
                <Text
                    lineHeight={lineHeight}
                    margin={margin}
                    font={FONTS.T1.T12px.Medium500.value}
                    color={COLORS.Text.T500.value}
                >
                    {label}
                </Text>
            )}
            {description && (
                <Text
                    lineHeight={lineHeight}
                    margin={margin}
                    font={FONTS.T1.T12px.Regular400.value}
                    color={COLORS.InputText.value}
                >
                    {description}
                </Text>
            )}
        </VStack>
    );
}
