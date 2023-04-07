/**
 * Generated by orval v6.13.1 🍺
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
    ProjectPagingDTO,
    GetProjectsParams,
    ProjectDTO,
    CreateProjectDTO,
    UpdateProjectDTO,
} from '.././types';
import { customInstance } from '.././config';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * Returns the projects of an organisation
 */
export const getProjects = (
    organisationId: string,
    params?: GetProjectsParams,
    signal?: AbortSignal,
) => {
    return customInstance<ProjectPagingDTO>({
        url: `/organisations/${organisationId}/projects`,
        method: 'get',
        params,
        signal,
    });
};

export const getGetProjectsQueryKey = (
    organisationId: string,
    params?: GetProjectsParams,
) =>
    [
        `/organisations/${organisationId}/projects`,
        ...(params ? [params] : []),
    ] as const;

export type GetProjectsQueryResult = NonNullable<
    Awaited<ReturnType<typeof getProjects>>
>;
export type GetProjectsQueryError = unknown;

export const useGetProjects = <
    TData = Awaited<ReturnType<typeof getProjects>>,
    TError = unknown,
>(
    organisationId: string,
    params?: GetProjectsParams,
    options?: {
        query?: UseQueryOptions<
            Awaited<ReturnType<typeof getProjects>>,
            TError,
            TData
        >;
    },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
    const { query: queryOptions } = options ?? {};

    const queryKey =
        queryOptions?.queryKey ??
        getGetProjectsQueryKey(organisationId, params);

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getProjects>>> = ({
        signal,
    }) => getProjects(organisationId, params, signal);

    const query = useQuery<
        Awaited<ReturnType<typeof getProjects>>,
        TError,
        TData
    >({
        queryKey,
        queryFn,
        enabled: !!organisationId,
        ...queryOptions,
    }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

    query.queryKey = queryKey;

    return query;
};

/**
 * Create a project in an organisation
 */
export const createProject = (
    organisationId: string,
    createProjectDTO: CreateProjectDTO,
) => {
    return customInstance<ProjectDTO>({
        url: `/organisations/${organisationId}/projects`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: createProjectDTO,
    });
};

export type CreateProjectMutationResult = NonNullable<
    Awaited<ReturnType<typeof createProject>>
>;
export type CreateProjectMutationBody = CreateProjectDTO;
export type CreateProjectMutationError = unknown;

export const useCreateProject = <
    TError = unknown,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof createProject>>,
        TError,
        { organisationId: string; data: CreateProjectDTO },
        TContext
    >;
}) => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof createProject>>,
        { organisationId: string; data: CreateProjectDTO }
    > = (props) => {
        const { organisationId, data } = props ?? {};

        return createProject(organisationId, data);
    };

    return useMutation<
        Awaited<ReturnType<typeof createProject>>,
        TError,
        { organisationId: string; data: CreateProjectDTO },
        TContext
    >(mutationFn, mutationOptions);
};
/**
 * Update a project
 */
export const updateProject = (
    organisationId: string,
    projectId: string,
    updateProjectDTO: UpdateProjectDTO,
) => {
    return customInstance<ProjectDTO>({
        url: `/organisations/${organisationId}/projects/${projectId}`,
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        data: updateProjectDTO,
    });
};

export type UpdateProjectMutationResult = NonNullable<
    Awaited<ReturnType<typeof updateProject>>
>;
export type UpdateProjectMutationBody = UpdateProjectDTO;
export type UpdateProjectMutationError = unknown;

export const useUpdateProject = <
    TError = unknown,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof updateProject>>,
        TError,
        { organisationId: string; projectId: string; data: UpdateProjectDTO },
        TContext
    >;
}) => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof updateProject>>,
        { organisationId: string; projectId: string; data: UpdateProjectDTO }
    > = (props) => {
        const { organisationId, projectId, data } = props ?? {};

        return updateProject(organisationId, projectId, data);
    };

    return useMutation<
        Awaited<ReturnType<typeof updateProject>>,
        TError,
        { organisationId: string; projectId: string; data: UpdateProjectDTO },
        TContext
    >(mutationFn, mutationOptions);
};
/**
 * Delete a project
 */
export const deleteProject = (organisationId: string, projectId: string) => {
    return customInstance<void>({
        url: `/organisations/${organisationId}/projects/${projectId}`,
        method: 'delete',
    });
};

export type DeleteProjectMutationResult = NonNullable<
    Awaited<ReturnType<typeof deleteProject>>
>;

export type DeleteProjectMutationError = unknown;

export const useDeleteProject = <
    TError = unknown,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof deleteProject>>,
        TError,
        { organisationId: string; projectId: string },
        TContext
    >;
}) => {
    const { mutation: mutationOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof deleteProject>>,
        { organisationId: string; projectId: string }
    > = (props) => {
        const { organisationId, projectId } = props ?? {};

        return deleteProject(organisationId, projectId);
    };

    return useMutation<
        Awaited<ReturnType<typeof deleteProject>>,
        TError,
        { organisationId: string; projectId: string },
        TContext
    >(mutationFn, mutationOptions);
};
