import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { Chakra } from 'src/utils/chakra';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Chakra cookies={pageProps.cookies}>
                <Component {...pageProps} />
            </Chakra>
        </QueryClientProvider>
    );
}
