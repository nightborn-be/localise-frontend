import React from 'react';
import { Font } from '../../../constants/fonts';
import { ProjectDTO } from 'gateways/resource-api/types';
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
    handleOnUpdateColorProject: (
        iconColor: string,
    ) => void;
}
