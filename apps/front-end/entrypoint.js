const fs = require('fs');

function replaceEnvVarsInFiles(envVars, directory) {
    // Recursively search the specified directory for all files
    const allFiles = [];

    function findFiles(dir) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = `${dir}/${file}`;
            if (fs.statSync(fullPath).isDirectory()) {
                findFiles(fullPath);
            } else {
                allFiles.push(fullPath);
            }
        }
    }

    findFiles(directory);

    // Replace each environment variable in all files with its value
    for (const file of allFiles) {
        let fileContents = '';
        try {
            fileContents = fs.readFileSync(file, 'utf8');
        } catch (err) {
            console.error(`Error reading ${file}: ${err}`);
            continue;
        }
        for (const [key, value] of Object.entries(envVars)) {
            const regex = new RegExp(`\\${key}\\b`, 'g');
            fileContents = fileContents.replace(regex, value);
        }
        try {
            fs.writeFileSync(file, fileContents);
        } catch (err) {
            console.error(`Error writing ${file}: ${err}`);
            continue;
        }
    }
}

const envVars = {
    NEXT_PUBLIC_DEFAULT_LANGUAGE: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    NEXT_PUBLIC_AVAILABLE_LANGUAGES:
        process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES,
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
        process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
        process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_API_ID: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:
        process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
};

replaceEnvVarsInFiles(envVars, './apps/front-end/.next');
