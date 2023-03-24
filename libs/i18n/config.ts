interface I18n {
    defaultLanguage?: string;
    availableLanguages?: string[];
}

export const i18nConfig: I18n = {
    defaultLanguage: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
    availableLanguages: process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES?.split(
        ',',
    ).map((language) => language.trim().toLowerCase()),
};