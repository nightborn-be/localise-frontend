import Axios, { AxiosRequestConfig } from 'axios';

export const AXIOS_INSTANCE = Axios.create({
    // @ts-ignore
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});
export const customInstance = async <T>(
    config: AxiosRequestConfig,
): Promise<T> => {
    const source = Axios.CancelToken.source();
    const improvedConfig = {
        ...config,
        headers: {
            Authorization: `Bearer ${await getIdToken()}`,
        },
    };
    const promise = AXIOS_INSTANCE({
        ...improvedConfig,
        cancelToken: source.token,
    }).then(({ data }: any) => data);

    // eslint-disable-next-line
    // @ts-ignore
    promise.cancel = () => {
        source.cancel('Query was cancelled by React Query');
    };

    return promise;
};

async function getIdToken() {
    try {
        return '';
    } catch {
        return '';
    }
}
