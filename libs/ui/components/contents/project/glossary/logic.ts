import { useCallback, useEffect, useRef } from 'react';
import { GlossaryLogicType } from './types';
import { IGlossaryLogicProps } from './props';

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
            addNewRowTerm({});
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
