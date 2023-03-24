import React from 'react';
import { Font } from '../../../constants/fonts';
export interface ISidebarProps {
    text?: string;
    textFont?: Font;
    textColor?: string;
    startEnhancer?: React.ReactElement;
    projectIconColor?: string;
    marginLeftText?: string;
    notificationNumber?: number;
    displayColorBox?: boolean;
    w?: string;
    h?: string;
}
