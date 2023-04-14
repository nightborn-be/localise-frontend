import React from 'react';
export interface IColorPickerProps {
    size?: string,
    borderRadius?: string,
    isSelected: boolean;
    color: string;
    onSelect: (color: string) => void;
    widthIcon?: string,
    heightIcon?: string,
}
