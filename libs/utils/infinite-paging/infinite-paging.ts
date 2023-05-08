import { useMemo } from 'react';
import {
    IInfinitePagingProps,
    InfinitePagingResponse,
} from './props';
import {
    FetchNextPageOptions,
    FetchPreviousPageOptions,
    InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { TermPagingDTO } from 'gateways/resource-api/types';

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
}: IInfinitePagingProps<TermPagingDTO>): InfinitePagingResponse<TermPagingDTO> => {
    // Attributes
    const query = useQueryFn(...pathParams, queryParams, {
        query: {
            getNextPageParam: (lastPage: TermPagingDTO) => {
                // Check has next page
                if (!lastPage.page || !lastPage.nbPages) {
                    return undefined
                }
                if (lastPage.page + 1 > lastPage.nbPages) {
                    return undefined;
                }

                return lastPage.page + 1;
            },
            ...options?.query,
        },
    });

    // Set pagination attributes
    // const paginationData = useMemo((): TermPagingDTO => {
    //     console.log(query);
    //     return {
    //         data: lastPage?.data,
    //         nbPages: lastPage?.nbPages,
    //         page: lastPage?.page,
    //         size: lastPage?.size,
    //     };
    // }, [query.data?.pages]);

    // Functions
    async function fetchNextPage(
        options?: FetchNextPageOptions | undefined,
    ): Promise<
        InfiniteQueryObserverResult<TermPagingDTO, unknown> | undefined
    > {
        if (!query.hasNextPage) {
            return;
        }

        return query.fetchNextPage(options);
    }

    async function fetchPreviousPage(
        options?: FetchPreviousPageOptions | undefined,
    ): Promise<
        InfiniteQueryObserverResult<TermPagingDTO, unknown> | undefined
    > {
        if (!query.hasPreviousPage) {
            return;
        }

        return query.fetchPreviousPage(options);
    }

    return {
        ...query,
        fetchNextPage,
        fetchPreviousPage,
    };
};