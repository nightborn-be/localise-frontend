import {
    UpdateProjectDTO,
    UpsertProjectLanguageDTO,
} from 'gateways/resource-api/types';
import languages from 'utils/languages';

export const toUpdateProjectDTO = (
    projectName: string,
    sourceLanguage: string,
    targetLanguages: string[],
): UpdateProjectDTO | undefined => {
    const source = languages.find(language => language.name === sourceLanguage)
    const targets = targetLanguages.map(language => languages.find(lang => lang.name === language))
    if (source === undefined) {
        return undefined
    }
    if (targets === undefined) {
        return undefined
    }
    const res: UpdateProjectDTO = {
        name: projectName,
        sourceLanguage: source,
        languages: toUpsertProjectLanguageDTOArray()
    };
    return res;
};

const toUpsertProjectLanguageDTOArray = (): UpsertProjectLanguageDTO[] => {
    return languages.filter(language => language !== undefined) as UpsertProjectLanguageDTO[]
}