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
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg3YzFlN2Y4MDAzNGJiYzgxYjhmMmRiODM3OTIxZjRiZDI4N2YxZGYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRGV2ZWxvcGVyIE5pZ2h0Ym9ybiIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9sb2NhbGl6ZS1zdGFnaW5nIiwiYXVkIjoibG9jYWxpemUtc3RhZ2luZyIsImF1dGhfdGltZSI6MTY4MDUzMzQzNiwidXNlcl9pZCI6IldKRHNmaXNJOU9TbW1Zd0VtRHhKMWhCSXFnMTIiLCJzdWIiOiJXSkRzZmlzSTlPU21tWXdFbUR4SjFoQklxZzEyIiwiaWF0IjoxNjgwNTMzNDM2LCJleHAiOjE2ODA1MzcwMzYsImVtYWlsIjoiZGV2ZWxvcGVyQG5pZ2h0Ym9ybi5iZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJkZXZlbG9wZXJAbmlnaHRib3JuLmJlIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.q8r-S8_1JCx8PDcrnCc7gE_g7LdR6S8pXg0lgjs7_olc8t-rst7RkQCkW7oRIOs1puZQc5RS_YMILkf2CJjZ9aD1TQT8vilXxGbZVUgfn6vGTckiSBU18ts5gJckTLniBs93fs67WZF13z1OYzbAoB017jsz44Rp4IcSZJ5TxoDYoz9WmhCADRoucaqCVJjj704NQ9ImP70BAArx2sqdF4oRTWlhYe39yR0Nqs68QRgFDGcmMxWUqOzDh9SA1yef4Psncr4jPPuKv4WCnK_sCsm81tEAJc4h3sEAa82OUTwyjZRT1ik9jQzrV1BO-PRkreyGlj_puXHWctDGEiZMKw`,
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
