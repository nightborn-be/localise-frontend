import { useCallback, useEffect, useRef } from 'react';
import { GlossaryLogicType } from './types';
import { IGlossaryLogicProps } from './props';
import { useInView } from 'react-intersection-observer';

export const useGlossaryLogic = ({
    addNewRowTerm,
    onFetchProjectTermsNextPage
}: IGlossaryLogicProps): GlossaryLogicType => {
    // Attributes
    const tableRef = useRef<HTMLDivElement>(null);
    const { ref, inView } = useInView();
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


    useEffect(() => {
        if (!inView) {
            return;
        }

        onFetchProjectTermsNextPage();
    }, [inView]);
    return { tableRef, ref };
};
