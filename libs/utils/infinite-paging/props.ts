import {
    FetchNextPageOptions,
    FetchPreviousPageOptions,
    InfiniteQueryObserverResult,
    QueryKey,
    UseInfiniteQueryOptions,
    UseInfiniteQueryResult,
} from '@tanstack/react-query';

export type Pagination<T extends object> = {
    schema: any & { data: T };
};

export interface IInfinitePagingProps<T extends object> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useQueryFn: (...params: any) => UseInfiniteQueryResult<
        Pagination<T[]>,
        unknown
    > & {
        queryKey: QueryKey;
    };
    pathParams?: (string | number)[];
    queryParams?: object;
    options?: {
        query?:
        | UseInfiniteQueryOptions<
            Pagination<T[]>,
            unknown,
            Pagination<T[]>,
            Pagination<T[]>,
            QueryKey
        >
        | undefined;
    };
}

export type InfinitePagingResponse<T extends object> = Omit<
    UseInfiniteQueryResult<Pagination<T[]>, unknown>,
    'data' | 'fetchNextPage' | 'fetchPreviousPage'
> & {
    queryKey: QueryKey;
} & {
    data: T[] | undefined;
    nbPages: number | undefined;
    page: number | undefined;
    size: number | undefined;
    fetchNextPage: (
        options?: FetchNextPageOptions | undefined,
    ) => Promise<
        InfiniteQueryObserverResult<Pagination<T[]>, unknown> | undefined
    >;
    fetchPreviousPage: (
        options?: FetchPreviousPageOptions | undefined,
    ) => Promise<
        InfiniteQueryObserverResult<Pagination<T[]>, unknown> | undefined
    >;
};