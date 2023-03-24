import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from './config';
import en from './en.json';
import fr from './fr.json';

const locales = { en, fr } as unknown as Record<string, Record<string, string>>;

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
};
