import { useState } from 'react'
import { initializeApp } from 'firebase/app'
import UserCredential, { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { saveTokenInStorage } from '../../utils/token';
export const useLogic = () => {
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    };
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app);
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [userCredential, setUserCredential] = useState<UserCredential.User>();
    async function signIn(email: string, password: string): Promise<void> {
        signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                setIsLogged(true);
                setUserCredential(data.user);
                data.user.getIdToken().then((data) => { saveTokenInStorage({ id_token: data, access_token: '', refresh_token: '' }) })
            })
            .catch((error) => {
                console.error("firebase code", error.code)
                console.error("firebase error", error.message)
            })
    }


    return {
        isLogged,
        setIsLogged,
        signIn,
        userCredential
    }
}