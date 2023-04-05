import React from 'react';
import { VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import { IInputLabelProps } from './props';

const InputLabel = ({
    label,
    description,
    lineHeight = '15px',
    margin = '0',
    labelFont = FONTS.T1.T12px.Medium500.value,
    labelColor = COLORS.Text.T500.value,
    descriptionFont = FONTS.T1.T12px.Regular400.value,
    descriptionColor = COLORS.InputText.value,
    spacing = '0.25rem',
}: IInputLabelProps) => {
    //Attributes

    //Render
    if (!label && !description) return <></>;
    return (
        <VStack spacing={spacing} align='left'>
            {label && (
                <Text
                    lineHeight={lineHeight}
                    margin={margin}
                    font={labelFont}
                    color={labelColor}
                >
                    {label}
                </Text>
            )}
            {description && (
                <Text
                    lineHeight={lineHeight}
                    margin={margin}
                    font={descriptionFont}
                    color={descriptionColor}
                >
                    {description}
                </Text>
            )}
        </VStack>
    );
};
export default InputLabel;
