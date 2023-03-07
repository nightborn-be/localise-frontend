import React from 'react'
import { Font } from '../../../constants/fonts';
export default interface ToggleProps {
    topText?: string,
    topTextFont?: Font,
    topTextColor?: string,
    bottomText?: string,
    bottomTextFont?: Font,
    bottomTextColor?: string,
    startEnhancer?: React.ReactElement,
    endEnhancer?: React.ReactElement,
    projectIconColor?: string,
    marginLeftText?: string,
    notificationNumber?: number,
    showNotification?: boolean,
    canBeSelected?: boolean,
    w?: string,
    h?: string,
}

