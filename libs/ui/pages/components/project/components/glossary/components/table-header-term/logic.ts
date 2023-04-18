import { useState } from 'react';
import { TableHeaderTermLogicType } from './types';

export const useTableHeaderTermLogic = (): TableHeaderTermLogicType => {
    // Attributes
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState<boolean>(false);

    // Functions
    function toggleIsMoreMenuOpen() {
        setIsMoreMenuOpen((prev) => !prev);
    }
    return { isMoreMenuOpen, toggleIsMoreMenuOpen };
};
