import {
    FetchNextPageOptions,
    FetchPreviousPageOptions,
    InfiniteQueryObserverResult,
    QueryKey,
    UseInfiniteQueryOptions,
    UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { TermDTO, TermPagingDTO } from 'gateways/resource-api/types';



export interface IInfinitePagingProps<T extends object> {
    useQueryFn: (...params: any) => UseInfiniteQueryResult<
        TermPagingDTO,
        unknown
    > & {
        queryKey: QueryKey;
    };
    pathParams?: (string | number)[];
    queryParams?: object;
    options?: {
        query?:
        | UseInfiniteQueryOptions<
            TermPagingDTO,
            unknown,
            TermPagingDTO,
            TermPagingDTO,
            QueryKey
        >
        | undefined;
    };
}

export type InfinitePagingResponse<T extends object> = Omit<
    UseInfiniteQueryResult<TermPagingDTO, unknown>,
    'data' | 'fetchNextPage' | 'fetchPreviousPage'
> & {
    queryKey: QueryKey;
} & {
    fetchNextPage: (
        options?: FetchNextPageOptions | undefined,
    ) => Promise<
        InfiniteQueryObserverResult<TermPagingDTO, unknown> | undefined
    >;
    fetchPreviousPage: (
        options?: FetchPreviousPageOptions | undefined,
    ) => Promise<
        InfiniteQueryObserverResult<TermPagingDTO, unknown> | undefined
    >;
};

export interface IInViewLoaderProps {
    isLoading: boolean;
    onLoad: () => void;
}