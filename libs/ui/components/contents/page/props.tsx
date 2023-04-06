import { ReactNode } from 'react';

export interface PageProps {
    children: ReactNode | ReactNode[];
    bg?: string;
    bgImage?: string;
    displaySidebar?: boolean;
}
