import {
    CreateProjectDTO,
    UpsertProjectLanguageDTO,
} from '../../../../gateways/resource-api/types';
import languages from '../../../../utils/languages';
import COLORS from '../../../constants/colors';

export const toCreateProjectDTO = (
    projectName: string,
    sourceLanguage: string,
    targetLanguages: string[],
): CreateProjectDTO => {
    const languageMap: any = {};
    languages.forEach(
        (language: any) => (languageMap[language.name] = language),
    );
    const source: UpsertProjectLanguageDTO = languageMap[sourceLanguage];
    const target: UpsertProjectLanguageDTO[] = [];
    targetLanguages.forEach((obj: any) => target.push(languageMap[obj]));

    const res: CreateProjectDTO = {
        name: projectName,
        sourceLanguage: source,
        languages: target,
        iconColor: COLORS.ProjectColors.Pink.value,
    };

    return res;
};
