import { ReactNode } from 'react';

export interface ITabTitleProps {
    title: string;
    onSelect?: () => void;
    active?: boolean;
    datacy?: string;
}

export interface ITabProps extends ITabTitleProps {
    children?: ReactNode | ReactNode[];
}
