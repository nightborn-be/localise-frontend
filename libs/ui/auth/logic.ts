import { useState, useEffect } from 'react';
import { FirebaseApp, initializeApp } from 'firebase/app';
import UserCredential, {
    getAuth,
    signInWithEmailAndPassword,
} from '@firebase/auth';
import { tokenStorage } from '../../utils/token/token';
import { firebaseConfig } from './config';
export const useLogic = () => {

    // Attributes
    const [app, setApp] = useState<FirebaseApp>()
    const [auth, setAuth] = useState<UserCredential.Auth>()

    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [firebaseUser, setFirebaseUser] = useState<UserCredential.User>();

    // Functions
    async function signIn(email: string, password: string): Promise<void> {
        if (!auth) {
            return;
        }
        const data = await signInWithEmailAndPassword(auth, email, password);
        if (data) {
            setIsLogged(true)
            setFirebaseUser(data.user)
        }
    }

    // Effect
    useEffect(() => {
        firebaseUser?.getIdToken().then((token) => {
            tokenStorage.save({
                id_token: token
            })
        })
    }, [firebaseUser])

    useEffect(() => {
        setApp(initializeApp(firebaseConfig));
        setAuth(getAuth())
    }, [])

    return {
        isLogged,
        setIsLogged,
        signIn,
        firebaseUser,
    };
};
