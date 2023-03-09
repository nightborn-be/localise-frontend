import React from 'react'
import { Font } from '../../../constants/fonts';
export default interface SidebarProps {
    text?: string,
    textFont?: Font,
    textColor?: string,
    startEnhancer?: React.ReactElement,
    endEnhancer?: React.ReactElement,
    projectIconColor?: string,
    marginLeftText?: string,
    notificationNumber?: number,
    showNotification?: boolean,
    canBeSelected?: boolean,
    isCheckbox?: boolean,
    displayColorBox?: boolean,
    w?: string,
    h?: string,
}

