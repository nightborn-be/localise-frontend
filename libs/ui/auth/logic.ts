import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
} from '@firebase/auth';
import { tokenStorage } from '../../utils/token/token';
import { firebaseConfig } from './config';
import { TokenKey } from '../../utils/token/token-keys';
export const useLogic = () => {
    // Attributes
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isFirebaseLoading, setIsFirebaseLoading] = useState<boolean>(true);

    // Functions
    async function signIn(email: string, password: string): Promise<void> {
        const auth = getAuth();
        if (!auth) {
            return;
        }
        setIsLoading(true);
        const data = await signInWithEmailAndPassword(auth, email, password);
        setIsLoading(false);
        if (data) {
            auth.currentUser?.getIdToken().then((token) => {
                tokenStorage.save({ [TokenKey.ID_TOKEN]: token });
            });
        }
    }

    useEffect(() => {
        initializeApp(firebaseConfig);
        setIsFirebaseLoading(false);
    }, []);

    return {
        isLogged: !isFirebaseLoading && getAuth().currentUser != null,
        isAuthLoading: isFirebaseLoading,
        isLoading,
        setIsLoading,
        signIn,
    };
};
