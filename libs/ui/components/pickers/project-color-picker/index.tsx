import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import { IProjectColorPickerProps } from './props';
import ColorPicker from './color-picker';

const ProjectColorPicker = ({
    onSelect,
    selected,
}: IProjectColorPickerProps) => {
    // Attributes
    const colors: string[] = [
        COLORS.Localize.Purple.T500.value,
        COLORS.Success.T500.value,
        COLORS.Warning.T500.value,
        COLORS.Error.T500.value,
        COLORS.Social.FacebookBlue.value,
        COLORS.Bancontact.Payconiq.value,
        COLORS.Visa.Yellow.value,
        '#DF73FF',
    ];

    // Render
    return (
        <>
            <HStack
                padding={'0.9375rem'}
                paddingBottom='1.125rem'
                gap='0.75rem'
                width='11rem'
                height='fit-content'
                maxW='11rem'
                border={`0.0625rem solid ${COLORS.Line.value}`}
                borderRadius={'0.5rem'}
                flexWrap={'wrap'}
                alignContent={'space-between'}
                boxShadow='0rem 0.125rem 0.5rem rgba(40, 41, 61, 0.04), 0rem 1.625rem 2.125rem rgba(96, 97, 112, 0.06)'
            >
                {colors.map((color, i) => (
                    <ColorPicker
                        key={i}
                        onSelect={onSelect}
                        isSelected={selected === color}
                        color={color}
                    />
                ))}
            </HStack>
        </>
    );
};
export default ProjectColorPicker;