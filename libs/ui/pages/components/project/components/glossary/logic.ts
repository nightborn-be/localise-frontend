import { useRef, useState } from 'react';
import { GlossaryLogicType } from './types';
import { TermDTO } from 'gateways/resource-api/types';

export const useGlossaryLogic = (): GlossaryLogicType => {
    // Attributes
    const tableRef = useRef<HTMLDivElement>(null);
    const [newRowTerm, setNewRowTerm] = useState<TermDTO[]>([]);
    // Functions
    function clearNewRowTerm() {
        setNewRowTerm([]);
    }
    return { tableRef, newRowTerm, clearNewRowTerm };
};
