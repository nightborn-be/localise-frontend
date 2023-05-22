import { useCallback, useEffect, useRef } from 'react';
import { GlossaryLogicType } from './types';
import { IGlossaryLogicProps } from './props';
import useScrollPercentage from 'utils/scroll-percentage';

export const useGlossaryLogic = ({
    addNewRowTerm,
    onFetchProjectTermsNextPage,
    hasNextPageTerms
}: IGlossaryLogicProps): GlossaryLogicType => {
    // Attributes
    const tableRef = useRef<HTMLDivElement>(null);
    const [scrollRef, scrollPercentage] = useScrollPercentage();

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
        if (scrollPercentage > 70 && hasNextPageTerms) {
            onFetchProjectTermsNextPage();
        }
    }, [scrollPercentage]);

    return { tableRef, scrollRef };
};
