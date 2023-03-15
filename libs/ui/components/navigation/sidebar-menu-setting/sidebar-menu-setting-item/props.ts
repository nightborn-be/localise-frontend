import React from 'react'
import { Font } from '../../../../constants/fonts';
export default interface ISidebarMenuSettingItemProps {
    text?: string,
    textFont?: Font,
    textColor?: string,
    w?: string,
    h?: string,
    hoverBackgroundColor?: string
    isSelected?: boolean
    onSelect?: () => void
}