import { useEffect, useState } from 'react';
import { ProjectLogicType } from './types';

export const useProjectLogic = (): ProjectLogicType => {
    // Attributes
    const [activeKey, setActiveKey] = useState<React.Key>();
    useEffect(() => {
        setActiveKey(0);
    }, []);
    // Functions
    return { activeKey, setActiveKey };
};
