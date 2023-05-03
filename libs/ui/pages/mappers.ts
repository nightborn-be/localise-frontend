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
        sourceLanguage: toUpsertProjectLanguageDTO(source),
        languages: toUpsertProjectLanguageDTOArray(targets)
    };
    return res;
};


const toUpsertProjectLanguageDTO = (object?: UpsertProjectLanguageDTO): UpsertProjectLanguageDTO => {
    if (object === undefined) {
        return { name: '', abbreviation: '' }
    }
    return object
}

const toUpsertProjectLanguageDTOArray = (object: (UpsertProjectLanguageDTO | undefined)[]): UpsertProjectLanguageDTO[] => {
    if (object === undefined) {
        return []
    }
    let newObject: UpsertProjectLanguageDTO[] = []
    for (let index = 0; index < object.length; index++) {
        const element = object[index];
        if (element) {
            newObject[index] = element
        }

    }
    return newObject;
}