import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { getI18nInstance } from '../../../libs/i18n/index';
import { I18nextProvider } from 'react-i18next';
// Create query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

// Init sentry
// Sentry.init({
// 	dsn: 'DSN_HERE',
// 	integrations: [new BrowserTracing()],

// 	// Set tracesSampleRate to 1.0 to capture 100%
// 	// of transactions for performance monitoring.
// 	// We recommend adjusting this value in production
// 	tracesSampleRate: 1.0,
// });

function MyApp({ Component, pageProps }: AppProps) {
    // Attributes

    // suppress useLayoutEffect warnings when running outside a browser
    if (!process.browser) React.useLayoutEffect = React.useEffect;

    // Render
    return (
        <I18nextProvider i18n={getI18nInstance()}>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <Component {...pageProps} />
                </ChakraProvider>
            </QueryClientProvider>
        </I18nextProvider>
    );
}

export default MyApp;
