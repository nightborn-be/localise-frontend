import React from 'react'
export default interface ColorButtonProps {
    isSelected: boolean,
    color:string,
    setCurrentSelectedColor: (color:string) => void
}
