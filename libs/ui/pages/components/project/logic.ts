import { useEffect, useState } from 'react';
import { ProjectLogicType } from './types';

export const useProjectLogic = (): ProjectLogicType => {
    // Attributes
    const [activeKey, setActiveKey] = useState<React.Key>();
    useEffect(() => {
        setActiveKey(1);
    }, []);
    // Functions
    return { activeKey, setActiveKey };
};
