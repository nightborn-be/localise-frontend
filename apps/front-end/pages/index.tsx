import { useAuthRedirect } from '../../../libs/ui/auth/auth-redirect';

const Home = () => {
    useAuthRedirect('/dashboard');
    return <></>;
};

export default Home;
