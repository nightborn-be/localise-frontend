import { useState, useEffect } from 'react';
import { FirebaseApp, initializeApp } from 'firebase/app';
import UserCredential, {
    getAuth,
    signInWithEmailAndPassword,
} from '@firebase/auth';
import { tokenStorage } from '../../utils/token/token';
import { firebaseConfig } from './config';
import { TokenKey } from '../../utils/token/token-keys';
export const useLogic = () => {
    // Attributes
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [firebaseUser, setFirebaseUser] = useState<UserCredential.User>();

    // Functions
    async function signIn(email: string, password: string): Promise<void> {
        const auth = getAuth()
        if (!auth) {
            return;
        }
        const data = await signInWithEmailAndPassword(auth, email, password);
        if (data) {
            setIsLogged(true);
            setFirebaseUser(data.user);
        }
    }
    // Effect
    useEffect(() => {
        firebaseUser?.getIdToken().then((token) => {
            tokenStorage.save({ [TokenKey.ID_TOKEN]: token });
        });
    }, [firebaseUser]);

    useEffect(() => {
        initializeApp(firebaseConfig);
    }, []);

    return {
        isLogged,
        setIsLogged,
        signIn,
    };
};
