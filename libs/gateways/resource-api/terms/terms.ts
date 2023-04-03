/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Localize Backend API
 * OpenAPI spec version: v1
 */
import { useQuery, useMutation } from '@tanstack/react-query';
import type {
    UseQueryOptions,
    UseMutationOptions,
    QueryFunction,
    MutationFunction,
    UseQueryResult,
    QueryKey,
} from '@tanstack/react-query';
import type {
    TermPagingDTO,
    GetTermsParams,
    TermDTO,
    CreateTermDTO,
    UpdateTermDTO,
} from '.././types';
import { customInstance } from '.././config';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * Returns the terms of a project
 */
export const getTerms = (
    projectId: string,
    params?: GetTermsParams,
    signal?: AbortSignal,
) => {
    return customInstance<TermPagingDTO>({
        url: `/projects/${projectId}/terms`,
        method: 'get',
        params,
        signal,
    });
};

export const getGetTermsQueryKey = (
    projectId: string,
    params?: GetTermsParams,
) => [`/projects/${projectId}/terms`, ...(params ? [params] : [])];

export type GetTermsQueryResult = NonNullable<
    Awaited<ReturnType<typeof getTerms>>
>;
export type GetTermsQueryError = unknown;

export const useGetTerms = <
    TData = Awaited<ReturnType<typeof getTerms>>,
    TError = unknown,
>(
    projectId: string,
    params?: GetTermsParams,
    options?: {
        query?: UseQueryOptions<
            Awaited<ReturnType<typeof getTerms>>,
            TError,
            TData
        >;
    },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
    const { query: queryOptions } = options ?? {};

    const queryKey =
        queryOptions?.queryKey ?? getGetTermsQueryKey(projectId, params);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getTerms>>> = ({
        signal,
    }) => getTerms(projectId, params, signal);

    const query = useQuery<Awaited<ReturnType<typeof getTerms>>, TError, TData>(
        { queryKey, queryFn, enabled: !!projectId, ...queryOptions },
    ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

    query.queryKey = queryKey;

    return query;
};

/**
 * Create a term in a project
 */
export const createTerm = (projectId: string, createTermDTO: CreateTermDTO) => {
    return customInstance<TermDTO>({
        url: `/projects/${projectId}/terms`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: createTermDTO,
    });
};

export type CreateTermMutationResult = NonNullable<
    Awaited<ReturnType<typeof createTerm>>
>;
export type CreateTermMutationBody = CreateTermDTO;
export type CreateTermMutationError = unknown;

export const useCreateTerm = <TError = unknown, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof createTerm>>,
        TError,
        { projectId: string; data: CreateTermDTO },
        TContext
    >;
}) => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof createTerm>>,
        { projectId: string; data: CreateTermDTO }
    > = (props) => {
        const { projectId, data } = props ?? {};

        return createTerm(projectId, data);
    };

    return useMutation<
        Awaited<ReturnType<typeof createTerm>>,
        TError,
        { projectId: string; data: CreateTermDTO },
        TContext
    >(mutationFn, mutationOptions);
};
/**
 * Update a term
 */
export const updateTerm = (
    projectId: string,
    termId: string,
    updateTermDTO: UpdateTermDTO,
) => {
    return customInstance<TermDTO>({
        url: `/projects/${projectId}/terms/${termId}`,
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        data: updateTermDTO,
    });
};

export type UpdateTermMutationResult = NonNullable<
    Awaited<ReturnType<typeof updateTerm>>
>;
export type UpdateTermMutationBody = UpdateTermDTO;
export type UpdateTermMutationError = unknown;

export const useUpdateTerm = <TError = unknown, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof updateTerm>>,
        TError,
        { projectId: string; termId: string; data: UpdateTermDTO },
        TContext
    >;
}) => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof updateTerm>>,
        { projectId: string; termId: string; data: UpdateTermDTO }
    > = (props) => {
        const { projectId, termId, data } = props ?? {};

        return updateTerm(projectId, termId, data);
    };

    return useMutation<
        Awaited<ReturnType<typeof updateTerm>>,
        TError,
        { projectId: string; termId: string; data: UpdateTermDTO },
        TContext
    >(mutationFn, mutationOptions);
};
/**
 * Delete a term
 */
export const deleteTerm = (projectId: string, termId: string) => {
    return customInstance<void>({
        url: `/projects/${projectId}/terms/${termId}`,
        method: 'delete',
    });
};

export type DeleteTermMutationResult = NonNullable<
    Awaited<ReturnType<typeof deleteTerm>>
>;

export type DeleteTermMutationError = unknown;

export const useDeleteTerm = <TError = unknown, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof deleteTerm>>,
        TError,
        { projectId: string; termId: string },
        TContext
    >;
}) => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof deleteTerm>>,
        { projectId: string; termId: string }
    > = (props) => {
        const { projectId, termId } = props ?? {};

        return deleteTerm(projectId, termId);
    };

    return useMutation<
        Awaited<ReturnType<typeof deleteTerm>>,
        TError,
        { projectId: string; termId: string },
        TContext
    >(mutationFn, mutationOptions);
};
