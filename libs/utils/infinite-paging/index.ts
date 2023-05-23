import { useMemo } from 'react';
import {
    IInfinitePagingProps,
    InfinitePagingResponse,
    Pagination,
} from './props';
import {
    FetchNextPageOptions,
    FetchPreviousPageOptions,
    InfiniteQueryObserverResult,
} from '@tanstack/react-query';

/**
 * Orval configuration needed
 * - useInfinite: true
 * - useInfiniteQueryParam: 'page'
 */
export const useInfinitePaging = <T extends object>({
    useQueryFn,
    pathParams = [],
    queryParams = {},
    options,
}: IInfinitePagingProps<T>): InfinitePagingResponse<T> => {
    // Attributes
    const query = useQueryFn(...pathParams, queryParams, {
        query: {
            getNextPageParam: (lastPage: Pagination<T[]>) => {
                // Check has next page
                if (lastPage.page + 1 > lastPage.nbPages) {
                    return undefined;
                }

                return lastPage.page + 1;
            },
            ...options?.query,
        },
    });

    // Set pagination attributes
    const paginationData = useMemo(() => {
        const data = query.data?.pages?.flatMap(
            (page: Pagination<T[]>) => page.data,
        );
        const lastPage = query.data?.pages?.at(-1);

        return {
            data,
            nbPages: lastPage?.nbPages,
            page: lastPage?.page,
            size: lastPage?.size,
        };
    }, [query.data?.pages]);

    // Functions
    async function fetchNextPage(
        options?: FetchNextPageOptions | undefined,
    ): Promise<
        InfiniteQueryObserverResult<Pagination<T[]>, unknown> | undefined
    > {
        if (!query.hasNextPage) {
            return;
        }

        return query.fetchNextPage(options);
    }

    async function fetchPreviousPage(
        options?: FetchPreviousPageOptions | undefined,
    ): Promise<
        InfiniteQueryObserverResult<Pagination<T[]>, unknown> | undefined
    > {
        if (!query.hasPreviousPage) {
            return;
        }

        return query.fetchPreviousPage(options);
    }

    return {
        ...query,
        ...paginationData,
        fetchNextPage,
        fetchPreviousPage,
    };
};
