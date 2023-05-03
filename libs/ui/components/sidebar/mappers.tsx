import {
    LanguageDTO,
    LanguagePagingDTO,
    UpdateProjectDTO,
    UpsertProjectLanguageDTO,
} from 'gateways/resource-api/types';
import languages from 'utils/languages';

export const toUpdateColorProjectDTO = (
    projectName: string,
    languages: LanguagePagingDTO | undefined,
    iconColor: string,
): UpdateProjectDTO => {
    let source: UpsertProjectLanguageDTO = { name: '', abbreviation: '' };
    const target: UpsertProjectLanguageDTO[] = [];
    languages?.data?.forEach((language: LanguageDTO) => {
        if (language.isSource) {
            source = language;
        } else {
            target.push(language);
        }
    });

    const res: UpdateProjectDTO = {
        name: projectName,
        sourceLanguage: source,
        languages: target,
        iconColor: iconColor,
    };

    return res;
};
