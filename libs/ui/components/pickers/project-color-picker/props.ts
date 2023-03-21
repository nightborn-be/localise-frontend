import React from 'react';
export interface IProjectColorPickerProps {
    selected: string;
    onSelect: (color: string) => void;
}
