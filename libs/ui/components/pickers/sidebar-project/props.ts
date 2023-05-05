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
    onClick: (value: any) => void;
    activeKey: string;
    handleOnUpdateColorProject: (iconColor: string) => void;
}
