import React from 'react';
export interface IColorPickerProps {
    isSelected: boolean;
    color: string;
    onSelect: (color: string) => void;
}
