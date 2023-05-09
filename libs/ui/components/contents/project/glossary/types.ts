import { RefObject } from 'react';

export interface GlossaryLogicType {
    tableRef: RefObject<HTMLDivElement>;
    ref: (node?: Element | null | undefined) => void
}
