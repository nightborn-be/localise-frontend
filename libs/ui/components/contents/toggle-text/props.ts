import React from 'react';
export interface IToggleTextProps {
    text?: string;
    borderRadius?: string;
    boxShadow?: string;
    textPaddingRight?: string;
    border?: string;
    w?: string;
    h?: string;
    padding?: string;
    gap?: string;
    isChecked?: boolean;
    toggleChecked?: () => void;
}
