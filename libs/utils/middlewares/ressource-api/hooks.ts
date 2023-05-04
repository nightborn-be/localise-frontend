import axios from 'axios';
import { useEffect, useState } from 'react';
import { AXIOS_INSTANCE } from '../../../gateways/resource-api/config';
import { useRouter } from 'next/router';

const useResourcesAPIMiddleware = () => {
    // Attributes
    const { push } = useRouter();
    const [responseInterceptorId, setResponseInterceptorId] =
        useState<number | undefined>();

    // Functions
    // Handle responses from evey request
    function handleResponseInterceptor() {
        if (responseInterceptorId !== undefined) {
            return;
        }

        const respInterceptorId = AXIOS_INSTANCE.interceptors.response.use(
            // Don't do anything if the status is 2xx
            (response) => response,
            // Handle response with statuses that don't match 2xx
            async (error) => {
                if (!error.response) {
                    return Promise.reject(error);
                }

                // Refresh token when call has a 401 unauthorized status
                // Then re-send the call
                const originalConfig = error.config;
                if (error.response.status === 401 && !originalConfig._retry) {
                    // Set _retry to true to avoid infinite loop
                    originalConfig._retry = true;
                    push('/auth')
                }
                if (error.response.status === 500 && !originalConfig._retry) {
                    originalConfig._retry = true;
                    push('/Error500')
                }
                // Return the request
                return axios(originalConfig);
            },
        );

        setResponseInterceptorId(respInterceptorId);
    }

    useEffect(() => {
        // Handle responses from evey request
        handleResponseInterceptor();

        // Clean interceptor handlers
        return () => {
            if (responseInterceptorId) {
                AXIOS_INSTANCE.interceptors.response.eject(responseInterceptorId);
            }
        };
    }, []);
};

export default useResourcesAPIMiddleware;