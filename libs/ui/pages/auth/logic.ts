import { useRouter } from 'next/router';
import { AuthLogicType } from './types';



export const useAuthLogic = (): AuthLogicType => {
    // Attributes
    const { push } = useRouter();

    // Functions
    function handleSignInRedirection() {
        push('auth/sign-in');
        return;
    }

    function handleLogInRedirecton() {
        push('auth/login');
        return;
    }

    return {
        handleLogInRedirecton,
        handleSignInRedirection
    }

}