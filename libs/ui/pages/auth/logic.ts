import { useRouter } from 'next/router';
import { AuthHomeLogicResponse } from './types';

export const useAuthHomeLogic = (): AuthHomeLogicResponse => {
    // Attributes
    const { push } = useRouter();

    // Functions
    function handleSignInRedirection() {
        push('auth/sign-in');
    }

    function handleLogInRedirecton() {
        push('auth/sign-in');
    }

    return {
        handleLogInRedirecton,
        handleSignInRedirection,
    };
};
