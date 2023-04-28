import { useEffect, useState } from 'react';
import { useGetMe } from '../../gateways/resource-api/users/users';
import { TokenKey } from '../../utils/token/token-keys';
import { tokenStorage } from '../../utils/token/token';
import { useRouter } from 'next/router';

export const useAuthRedirect = async (route?: string) => {
    // Attributes
    const router = useRouter();
    let currentRoute = route ?? router.asPath;
    const [hasToken, setHasToken] = useState<boolean>(false);
    useGetMe({
        query: {
            enabled: hasToken,
            onSuccess: () => {
                if (!route) {
                    return;
                }

                router.push(route);
            },
            onError: () => {
                redirectSignIn(router.push, currentRoute);
            },
        },
    });

    // Effects
    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        const token = tokenStorage.get(TokenKey.ID_TOKEN);
        if (token) {
            setHasToken(true);
            return;
        }

        redirectSignIn(router.push, currentRoute);
    }, [router.isReady]);
};

export function redirectSignIn(push: (url: string) => void, url?: string) {
    push(`/auth/${url ? `?redirectUrl=${encodeURIComponent(url)}` : ''}`);
}
