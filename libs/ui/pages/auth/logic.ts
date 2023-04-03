import { useRouter } from 'next/router';
import { AuthHomeLogicResponse } from './types';

export const useAuthHomeLogic = (): AuthHomeLogicResponse => {
    // Attributes
    const { push } = useRouter();

    // Functions
    function handleSignUpRedirection() {
        push('auth/sign-up');
    }

    function handleSignInRedirection() {
        push('auth/sign-in');
    }

    return {
        handleSignInRedirection,
        handleSignUpRedirection,
    };
};
