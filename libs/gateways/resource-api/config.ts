import Axios, { AxiosRequestConfig } from 'axios';
import { tokenStorage } from '../../utils/token/token';
import { TokenKey } from '../../utils/token/token-keys';

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
            Authorization: `Bearer ${tokenStorage.get(TokenKey.ID_TOKEN)}`,
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
