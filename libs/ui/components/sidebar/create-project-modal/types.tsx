import { IDefaultForm, IForm } from '../../../../utils/formik';
import { SearchSelectLanguageOption } from '../../contents/project/settings/types';
export interface CreateProjectLogicType {
    sourceLanguageActiveKey?: string;
    setSourceLanguageActiveKey: (value: string) => void;
    filterValue: string;
    setFilterValue: (value: string) => void;
    activeKeys: string[];
    setActiveKeys: (value: string[]) => void;
    value: string;
    setValue: (value: string) => void;
    onCheck: (value: string) => void;
    filter: (value: string) => SearchSelectLanguageOption<string>[];
    onTagDelete: (value: string) => void;
    resetForm: () => void;
    form: IForm<ICreateProjectForm> & IDefaultForm;
}

export interface ICreateProjectForm {
    projectName: string;
    sourceLanguage: string;
    targetLanguages: string[];
}
