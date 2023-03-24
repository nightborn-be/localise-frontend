/* eslint-disable */
const axios = require("axios");
const fs = require("fs");
const { set } = require("lodash");

if (!process.env.CI) {
	require("dotenv").config({
		path: `.env`,
	});
}

function transformToKeysObject(object) {
	return Object.keys(object).reduce((output, key) => {
		return set(output, key, key);
	}, {});
}

// Starting log
console.log(`*******
Starting new translation generation...`);

// Initial setup of the global environment
const env = {
	outputPath: process.env.LOCALIZE_OUTPUT_DIR,
	organisationId: process.env.LOCALIZE_ORGANISATION_ID,
	projectId: process.env.LOCALIZE_PROJECT_ID,
	token: process.env.LOCALIZE_TOKEN,
};

// Verification of correct setup
if (!env.outputPath || !env.projectId || !env.token || !env.organisationId) {
	envError();
}

(async function () {
	try {
		// Retrieves translations
		const data = await axios.get(`https://localize-back-end.herokuapp.com/organisations/${env.organisationId}/projects/${env.projectId}/export`, {
			headers: {
				Authorization: "Bearer " + env.token,
			},
		});

		// Verifies HTTP status for request
		if (data.status == "200" && data.data) {
			// Group by languages
			const languages = {};
			data.data.forEach((row) => {
				if (!languages[row.language]) languages[row.language] = {};
				languages[row.language][row.term] = row.translation;
			});

			// Language logs
			console.log(
				`Following languages will be generated [${Object.keys(languages)
					.map((language) => `"${language}"`)
					.join(",")
					.toUpperCase()}].`
			);

			// Create folder if not existing
			if (!fs.existsSync(`${process.cwd()}/${env.outputPath}`)) {
				try {
					await fs.promises.mkdir(`${process.cwd()}/${env.outputPath}`, {
						recursive: true,
					});
				} catch (err) {
					console.error(`Couldn't create the output folder: ${err.message}`);
					process.exit(1);
				}
			}

			// Generate all JSON-translation files
			const [translations] = await Promise.all(
				Object.entries(languages).map(async ([accro, language]) => {
					// Creates JSON-translation file
					await fs.promises.writeFile(`${env.outputPath}/${accro}.json`, JSON.stringify(language));
					console.log(`Succesfully updated ${accro.toUpperCase()}-translations.`);
					return language;
				})
			);

			// Generate keys.ts
			const comment = "/* This file is auto-generated, manual edits in this file will be overwritten! */\n\n";
			const translationKeys = transformToKeysObject(translations);
			const printableTranslationKeys = JSON.stringify(translationKeys, null, 2);

			fs.writeFileSync(`${env.outputPath}/keys.ts`, `${comment}export const tKeys = ${printableTranslationKeys}`, "utf-8");

			// Generate index.ts
			generateIndexFile(languages, env);

			console.log("Succesfully updated translation-keys.");
			console.log(`
*******`);
		} else {
			urlError();
		}
	} catch (err) {
		console.errror(err);
	}
})();

function envError() {
	console.error(`
Wrong configuration. 
Missing one of following .env variables
- LOCALIZE_TOKEN
- LOCALIZE_ORGANISATION_ID
- LOCALIZE_PROJECT_ID
- LOCALIZE_OUTPUT_DIR
`);
	throw "";
}

function urlError() {
	console.error(`Unable to update translations.`);
}

function generateIndexFile(languages, env) {
	const content = `import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from './config';
${Object.keys(languages)
	.map((accro) => {
		return `import ${accro} from "./${accro}.json";`;
	})
	.join("\n")}
const locales = ({ ${Object.keys(languages).join(", ")} } as unknown) as Record<string, Record<string, string>>;
const getResources = (languages?: string[]) => {
    return languages?.reduce(
        (acc, language) => ({
            ...acc,
            [language]: {
                translation: {
                    ...locales[language],
                },
            },
        }),
        {},
    );
};
export const getI18nInstance = () => {
    i18n.use(initReactI18next).init({
        lng: i18nConfig.defaultLanguage,
        fallbackLng: i18nConfig.defaultLanguage,
        resources: getResources(i18nConfig.availableLanguages),
        keySeparator: false,
        returnEmptyString: false,
    });
    return i18n;
};`;

	fs.writeFileSync(`${env.outputPath}/index.ts`, content);
}
