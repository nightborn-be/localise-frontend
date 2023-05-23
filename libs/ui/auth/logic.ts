import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { tokenStorage } from '../../utils/token/token';
import { firebaseConfig } from './config';
import { TokenKey } from '../../utils/token/token-keys';
import { storage } from 'utils/storage/storage';
import { StorageKey } from '../../utils/storage/storage-keys';
import { useRouter } from 'next/router';
export const useLogic = () => {
    // Attributes
    const [isFirebaseLoading, setIsFirebaseLoading] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { push } = useRouter()

    // Functions
    async function signIn(email: string, password: string): Promise<void> {
        const auth = getAuth();
        if (!auth) {
            return;
        }
        try {
            setIsLoading(true);
            const data = await signInWithEmailAndPassword(
                auth,
                email,
                password,
            );
            if (data) {
                auth.currentUser?.getIdToken().then((token) => {
                    tokenStorage.save({ [TokenKey.ID_TOKEN]: token });
                    setIsLoading(false);
                });
            }
        } catch (e) {
            setIsLoading(false);
            throw e;
        }
    }


    async function signOut(): Promise<void> {
        const auth = getAuth();

        if (!auth) {
            return;
        }
        await auth.signOut();
        storage.remove(StorageKey.ID_TOKEN)
        push('/auth')
    }
    useEffect(() => {
        initializeApp(firebaseConfig);
        setIsFirebaseLoading(false);
    }, []);

    return {
        isLogged: !isFirebaseLoading && getAuth().currentUser != null,
        isAuthLoading: isFirebaseLoading,
        isLoading,
        signIn,
        signOut,
    };
};
