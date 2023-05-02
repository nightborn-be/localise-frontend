import { useCallback, useEffect, useRef, useState } from 'react';
import { GlossaryLogicType } from './types';
import { TermDTO } from 'gateways/resource-api/types';
import { IGlossaryLogicProps } from './props';
import { v4 as uuidv4 } from 'uuid';

export const useGlossaryLogic = ({
    addNewRowTerm,
}: IGlossaryLogicProps): GlossaryLogicType => {
    // Attributes
    const tableRef = useRef<HTMLDivElement>(null);
    const handleOnShortCut = useCallback((event: KeyboardEvent) => {
        if (
            event.code === 'KeyT' &&
            !(event.target as Element).matches('input,textarea')
        ) {
            event.preventDefault();
            addNewRowTerm({ id: uuidv4() });
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleOnShortCut);

        return () => {
            document.removeEventListener('keydown', handleOnShortCut);
        };
    }, [handleOnShortCut]);
    return { tableRef };
};
