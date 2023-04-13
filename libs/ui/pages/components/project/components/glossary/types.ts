import { TermDTO } from 'gateways/resource-api/types';
import { RefObject } from 'react';

export interface GlossaryLogicType {
    tableRef: RefObject<HTMLDivElement>;
    newRowTerm: TermDTO[];
    clearNewRowTerm: () => void;
    addNewRowTerm: (term: TermDTO) => void;
}
