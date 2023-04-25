import { IDefaultForm, IForm } from 'utils/formik';
import { IUpdateProjectForm } from '../../types';
import { SearchBarOption } from '../../../../../../components/inputs/searchbar/props';

export interface ISearchBarSelectSettingSectionProps {
    sourceLanguageRef?: React.RefObject<HTMLDivElement>;
    filterValue: string;
    setFilterValue: (value: string) => void;
    form: IForm<IUpdateProjectForm> & IDefaultForm;
    sourceLanguageActiveKey?: string;
    setSourceLanguageActiveKey: (value: string) => void;
    optionsSourceLanguage: SearchBarOption<string>[];
}
