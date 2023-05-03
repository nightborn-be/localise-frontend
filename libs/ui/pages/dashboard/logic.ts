import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { IDashboardLogicProps } from './props';

export const useDashboardLogic = ({ onOpenProjectModal }: IDashboardLogicProps) => {
    const { query } = useRouter();
    const { projectModalIsOpen } = query;

    useEffect(() => {
        if (projectModalIsOpen === 'true') {
            onOpenProjectModal();
        }
    }, [projectModalIsOpen]);
    return {};
};
