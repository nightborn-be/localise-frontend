/**
 * Generated by orval v6.13.1 🍺
 * Do not edit manually.
 * Localize Backend API
 * OpenAPI spec version: v1
 */
import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/react-query';
import type {
    UseQueryOptions,
    UseInfiniteQueryOptions,
    UseMutationOptions,
    QueryFunction,
    MutationFunction,
    UseQueryResult,
    UseInfiniteQueryResult,
    QueryKey,
} from '@tanstack/react-query';
import type { UserDTO, CreateUserDTO, MeDTO } from '.././types';
import { customInstance } from '.././config';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * Create a user
 */
export const createUser = (createUserDTO: CreateUserDTO) => {
    return customInstance<UserDTO>({
        url: `/users`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: createUserDTO,
    });
};

export type CreateUserMutationResult = NonNullable<
    Awaited<ReturnType<typeof createUser>>
>;
export type CreateUserMutationBody = CreateUserDTO;
export type CreateUserMutationError = unknown;

export const useCreateUser = <TError = unknown, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof createUser>>,
        TError,
        { data: CreateUserDTO },
        TContext
    >;
}) => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof createUser>>,
        { data: CreateUserDTO }
    > = (props) => {
        const { data } = props ?? {};

        return createUser(data);
    };

    return useMutation<
        Awaited<ReturnType<typeof createUser>>,
        TError,
        { data: CreateUserDTO },
        TContext
    >(mutationFn, mutationOptions);
};
/**
 * Returns the logged in user informations
 */
export const getMe = (signal?: AbortSignal) => {
    return customInstance<MeDTO>({ url: `/me`, method: 'get', signal });
};

export const getGetMeQueryKey = () => [`/me`] as const;

export type GetMeInfiniteQueryResult = NonNullable<
    Awaited<ReturnType<typeof getMe>>
>;
export type GetMeInfiniteQueryError = unknown;

export const useGetMeInfinite = <
    TData = Awaited<ReturnType<typeof getMe>>,
    TError = unknown,
>(options?: {
    query?: UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMe>>,
        TError,
        TData
    >;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetMeQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getMe>>> = ({
        signal,
    }) => getMe(signal);

    const query = useInfiniteQuery<
        Awaited<ReturnType<typeof getMe>>,
        TError,
        TData
    >({ queryKey, queryFn, ...queryOptions }) as UseInfiniteQueryResult<
        TData,
        TError
    > & { queryKey: QueryKey };

    query.queryKey = queryKey;

    return query;
};

export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = unknown;

export const useGetMe = <
    TData = Awaited<ReturnType<typeof getMe>>,
    TError = unknown,
>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
    const { query: queryOptions } = options ?? {};

    const queryKey = queryOptions?.queryKey ?? getGetMeQueryKey();

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getMe>>> = ({
        signal,
    }) => getMe(signal);

    const query = useQuery<Awaited<ReturnType<typeof getMe>>, TError, TData>({
        queryKey,
        queryFn,
        ...queryOptions,
    }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

    query.queryKey = queryKey;

    return query;
};
