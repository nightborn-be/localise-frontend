import {
    UpdateProjectDTO,
    UpsertProjectLanguageDTO,
} from 'gateways/resource-api/types';
import languages from 'utils/languages';

export const toUpdateProjectDTO = (
    projectName: string,
    sourceLanguage: string,
    targetLanguages: string[],
): UpdateProjectDTO => {
    const source = languages.find(language => language.name === sourceLanguage)
    const targets = targetLanguages.map(language => languages.find(lang => lang.name === language))
    const res: UpdateProjectDTO = {
        name: projectName,
        sourceLanguage: source as UpsertProjectLanguageDTO,
        languages: targets as UpsertProjectLanguageDTO[],
    };
    return res;
};
