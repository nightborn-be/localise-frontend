import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const firebaseConfig = {
    apiKey: publicRuntimeConfig.FIREBASE_API_KEY,
    authDomain: publicRuntimeConfig.FIREBASE_AUTH_DOMAIN,
    projectId: publicRuntimeConfig.FIREBASE_PROJECT_ID,
    storageBucket: publicRuntimeConfig.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: publicRuntimeConfig.FIREBASE_MESSAGING_SENDER_ID,
    appId: publicRuntimeConfig.FIREBASE_API_ID,
    measurementId: publicRuntimeConfig.FIREBASE_MEASUREMENT_ID,
};
