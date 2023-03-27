import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import UserCredential, { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { saveTokenInStorage } from '../../utils/token';
export const useLogic = () => {
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_API_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID
    };
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app);
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [userCredential, setUserCredential] = useState<UserCredential.User>();
    async function signIn({ email, password }): Promise<void> {
        signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                setIsLogged(true);
                setUserCredential(data.user);
                saveTokenInStorage(data.user.getIdToken)
            })
            .catch((error) => {
                console.error(error.message)
            })
    }


    return {
        isLogged,
        setIsLogged,
        signIn,
        userCredential
    }
}