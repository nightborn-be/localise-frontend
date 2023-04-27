import { useRouter } from 'next/router';
import AuthHomePage from '../../../../libs/ui/pages/auth';
const AuthHome = () => {
    const { query } = useRouter();
    const { redirectUrl } = query;

    return (
        <AuthHomePage
            redirectUrl={
                redirectUrl
                    ? decodeURIComponent(redirectUrl as string)
                    : undefined
            }
        />
    );
};
export default AuthHome;
