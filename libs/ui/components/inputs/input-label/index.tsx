import React from 'react';
import { VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';

export default function InputLabel({ label, description }: InputLabelProps) {
    //Attributes
    const textProps = { lineHeight: '15px', margin: 0 };

    //Render
    if (!label && !description) return <></>;
    return (
        <VStack spacing='0.25rem' align='left'>
            {label && (
                <Text
                    {...textProps}
                    font={FONTS.T1.T12px.Medium500.value}
                    color={COLORS.Text.T500.value}
                >
                    {label}
                </Text>
            )}
            {description && (
                <Text
                    {...textProps}
                    font={FONTS.T1.T12px.Regular400.value}
                    color={COLORS.InputText.value}
                >
                    {description}
                </Text>
            )}
        </VStack>
    );
}
