import { useState } from 'react';
import { OptionColumnLogicType } from './types';

export const useOptionColumnLogic = (): OptionColumnLogicType => {
    // Attributes
    const [isMoreMenuOpen, setIsMoreMenuOpen] = useState<boolean>(false);

    // Functions
    function toggleIsMoreMenuOpen() {
        setIsMoreMenuOpen((prev) => !prev);
    }
    return { isMoreMenuOpen, toggleIsMoreMenuOpen };
};
