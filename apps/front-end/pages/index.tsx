import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from 'ui/auth';

const Home = () => {
    const auth = useAuth();
    console.log('home', auth);

    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {
            if (!auth.isLogged) {
                router.push('/auth');
            } else {
                router.push('/dashboard');
            }
        }
    }, []);

    return <></>;
};

export default Home;
