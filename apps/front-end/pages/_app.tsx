import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import React from 'react';

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
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <Component {...pageProps} />
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
