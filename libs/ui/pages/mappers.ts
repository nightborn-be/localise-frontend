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
    const source = languages.find(
        (language) => language.name === sourceLanguage,
    );
    const targets = targetLanguages.map((language) =>
        languages.find((lang) => lang.name === language),
    );
    if (source === undefined) {
        return undefined;
    }
    if (targets === undefined) {
        return undefined;
    }
    const res: UpdateProjectDTO = {
        name: projectName,
        sourceLanguage: source,
        languages: toUpsertProjectLanguageDTOArray(targets),
    };
    return res;
};

const toUpsertProjectLanguageDTOArray = (
    object: (UpsertProjectLanguageDTO | undefined)[],
): UpsertProjectLanguageDTO[] => {
    if (object === undefined) {
        return [];
    }
    let newObject: UpsertProjectLanguageDTO[] = [];
    for (let index = 0; index < object.length; index++) {
        const element = object[index];
        if (element) {
            newObject[index] = element;
        }
    }
    return newObject;
};
