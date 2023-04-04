import { IDefaultForm, IForm } from '../../../../utils/formik';
import { SearchBarOption } from '../../inputs/searchbar/props';

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
    filter: (value: string) => SearchBarOption<string>[];
    onTagDelete: (value: string) => void;
    handleOnSubmit: () => void;
    resetForm: () => void;
    form: IForm<ICreateProjectForm> & IDefaultForm;
}

export interface ICreateProjectForm {
    projectName: string;
    sourceLanguage: string;
    targetLanguages: string[];
}
