import { useState, useEffect, useRef } from 'react';
import { ProjectLogicType } from './types';

export const useProjectLogic = (): ProjectLogicType => {
    // Attributes
    const [activeKey, setActiveKey] = useState<React.Key>();
    // Functions
    return { activeKey, setActiveKey };
};
