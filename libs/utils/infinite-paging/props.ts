import {
    FetchNextPageOptions,
    FetchPreviousPageOptions,
    InfiniteQueryObserverResult,
    QueryKey,
    UseInfiniteQueryOptions,
    UseInfiniteQueryResult,
} from '@tanstack/react-query';

export type Pagination<T extends object> = {
    data: T;
    /** The number of pages */
    nbPages: number;
    /** The current page */
    page: number;
    /** The current size */
    size: number;
    /** The total amount of terms */
    totalAmount: number;
};

export interface IInfinitePagingProps<T extends object> {
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

export interface IInViewLoaderProps {
    isLoading: boolean;
    onLoad: () => void;
}
