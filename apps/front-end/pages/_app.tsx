import type { AppContext, AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { getI18nInstance } from '../../../libs/i18n/index';
import { I18nextProvider } from 'react-i18next';
import { AuthProvider } from '../../../libs/ui/auth';
import App from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Middelwares from '../../../libs/utils/middlewares/index';

const inter = Inter({ subsets: ['latin'] });

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
        <>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='use-credentials'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <main className={inter.className}>
                <I18nextProvider i18n={getI18nInstance()}>
                    <QueryClientProvider client={queryClient}>
                        <Middelwares>
                            <AuthProvider>
                                <ChakraProvider>
                                    <Component {...pageProps} />
                                </ChakraProvider>
                            </AuthProvider>
                        </Middelwares>
                    </QueryClientProvider>
                </I18nextProvider>
            </main>
        </>
    );
}

export async function getInitialProps(context: AppContext) {
    return await App.getInitialProps(context);
}

export default MyApp;
