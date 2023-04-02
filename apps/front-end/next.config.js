module.exports = {
    reactStrictMode: true,
    transpilePackages: ['ui'],
    publicRuntimeConfig: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
        FIREBASE_API_ID: process.env.FIREBASE_API_ID,
        FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
        DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE,
        AVAILABLE_LANGUAGES: process.env.AVAILABLE_LANGUAGES,
        BACKEND_URL: process.env.BACKEND_URL,
    },
};
