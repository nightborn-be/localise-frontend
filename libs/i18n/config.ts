import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

interface I18n {
    defaultLanguage?: string;
    availableLanguages?: string[];
}

export const i18nConfig: I18n = {
    defaultLanguage: publicRuntimeConfig.DEFAULT_LANGUAGE,
    availableLanguages: publicRuntimeConfig.AVAILABLE_LANGUAGES?.split(',').map(
        (language: string) => language.trim().toLowerCase(),
    ),
};
