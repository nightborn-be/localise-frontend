import type { AppContext, AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { getI18nInstance } from '../../../libs/i18n/index';
import { I18nextProvider } from 'react-i18next';
import { AuthProvider } from '../../../libs/ui/auth';
import App from 'next/app';

// Create query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    // Attributes

    // suppress useLayoutEffect warnings when running outside a browser
    if (!process.browser) React.useLayoutEffect = React.useEffect;

    // Render
    return (
        <I18nextProvider i18n={getI18nInstance()}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <ChakraProvider>
                        <Component {...pageProps} />
                    </ChakraProvider>
                </AuthProvider>
            </QueryClientProvider>
        </I18nextProvider>
    );
}

export async function getInitialProps(context: AppContext) {
    return await App.getInitialProps(context);
}

export default MyApp;
