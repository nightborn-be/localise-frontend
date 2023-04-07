import { ReactNode } from 'react';
import { CreateProjectDTO } from '../../../../gateways/resource-api/types';

export interface PageProps {
    children: ReactNode | ReactNode[];
    bg?: string;
    bgImage?: string;
    displaySidebar?: boolean;
    handleOnCreateProject: (value: CreateProjectDTO) => void;
}
