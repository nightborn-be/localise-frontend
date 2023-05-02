import {
    UpdateProjectDTO,
    UpsertProjectLanguageDTO,
} from 'gateways/resource-api/types';
import languages from 'utils/languages';
import COLORS from '../constants/colors';

export const toUpdateProjectDTO = (
    projectName: string,
    sourceLanguage: string,
    targetLanguages: string[],
): UpdateProjectDTO => {
    const languageMap: any = {};
    languages.forEach(
        (language: any) => (languageMap[language.name] = language),
    );
    const source: UpsertProjectLanguageDTO = languageMap[sourceLanguage];
    const target: UpsertProjectLanguageDTO[] = [];
    targetLanguages.forEach((obj: any) => target.push(languageMap[obj]));

    const res: UpdateProjectDTO = {
        name: projectName,
        sourceLanguage: source,
        languages: target,
        iconColor: COLORS.ProjectColors.Pink.value,
    };

    return res;
};
