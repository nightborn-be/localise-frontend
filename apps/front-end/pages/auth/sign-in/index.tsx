import React from 'react';
import SignInPage from '../../../../../libs/ui/pages/auth/sign-in';
import { useRouter } from 'next/router';

export default function SignIn() {
    const { query } = useRouter();
    const { redirectUrl } = query;

    return (
        <SignInPage
            redirectUrl={
                redirectUrl
                    ? decodeURIComponent(redirectUrl as string)
                    : undefined
            }
        />
    );
}
