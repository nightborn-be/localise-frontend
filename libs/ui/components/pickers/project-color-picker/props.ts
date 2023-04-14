import React from 'react';
export interface IProjectColorPickerProps {
    selected: string;
    onSelect: (color: string) => void;
    w?: string,
    padding?: string,
    colorPickerSize?: string,
    bg?: string,
    border?: string,
    borderRadius?: string,
    boxShadow?: string,
    widthIcon?: string,
    heightIcon?: string,
}
