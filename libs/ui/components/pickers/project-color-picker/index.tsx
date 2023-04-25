import React, { useState } from 'react';
import { HStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import { IProjectColorPickerProps } from './props';
import ColorPicker from './color-picker';
import SHADOWS from '../../../constants/shadows';

const ProjectColorPicker = ({
    onSelect,
    selected,
    w = '11rem',
    padding = '0.9375rem',
    bg = COLORS.White.T500.value,
    border = `0.0625rem solid ${COLORS.Line.value}`,
    colorPickerSize,
    borderRadius,
    boxShadow,
    widthIcon,
    heightIcon,
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
        COLORS.ProjectColors.Pink.value,
    ];

    // Render
    return (
        <>
            <HStack
                padding={padding}
                paddingBottom='1.125rem'
                gap='0.75rem'
                width={w}
                height='fit-content'
                maxW={w}
                border={border}
                bg={bg}
                borderRadius={'0.5rem'}
                flexWrap={'wrap'}
                alignContent={'space-between'}
                boxShadow={boxShadow}
            >
                {colors.map((color, i) => (
                    <ColorPicker
                        widthIcon={widthIcon}
                        heightIcon={heightIcon}
                        borderRadius={borderRadius}
                        size={colorPickerSize}
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
