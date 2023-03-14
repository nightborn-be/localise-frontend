import React from 'react'
export default interface ColorPickerProps {
    isSelected: boolean,
    color: string,
    setCurrentSelectedColor: (color: string) => void
}
