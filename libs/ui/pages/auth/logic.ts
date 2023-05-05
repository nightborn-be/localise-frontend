import { useRouter } from 'next/router';
import { AuthHomeLogicResponse } from './types';
import { useAuth } from 'ui/auth';
import { IAuthHomeLogicProps } from './props';

export const useAuthHomeLogic = ({
    redirectUrl,
}: IAuthHomeLogicProps): AuthHomeLogicResponse => {
    // Attributes
    const router = useRouter();
    // Functions
    function handleSignUpRedirection() {
        if (redirectUrl) {
            router.push(
                `auth/sign-up?redirectUrl=${encodeURIComponent(redirectUrl)}`,
            );
            return;
        }
        router.push('/auth/sign-up');
    }

    function handleSignInRedirection() {
        if (redirectUrl) {
            router.push(
                `auth/sign-in?redirectUrl=${encodeURIComponent(redirectUrl)}`,
            );
            return;
        }
        router.push('auth/sign-in');
    }

    return {
        handleSignInRedirection,
        handleSignUpRedirection,
    };
};
