import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from 'ui/auth';

const Home = () => {
    const auth = useAuth();
    console.log(auth);

    const { push } = useRouter();
    useEffect(() => {
        if (!auth.isLogged) {
            push('/auth');
        } else {
            push('/dashboard');
        }
    }, []);
};

export default Home;
