import React from 'react'
import { Font } from '../../../constants/fonts';
export default interface SidebarProps {
    text?: string,
    textFont?: Font,
    textColor?: string,
    startEnhancer?: React.ReactElement,
    projectIconColor?: string,
    marginLeftText?: string,
    notificationNumber?: number,
    displayColorBox?: boolean,
    w?: string,
    h?: string,
}

