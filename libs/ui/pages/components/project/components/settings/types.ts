import { IDefaultForm, IForm } from 'utils/formik';
import { MenuItemValue } from '../../../../../components/navigation/sidebar-menu-setting/types';
import { SearchBarOption } from '../../../../../components/inputs/searchbar/props';

export interface SettingsLogicType {
    form: IForm<IUpdateProjectForm> & IDefaultForm;
    activeMenuSettingKey: MenuItemValue;
    setActiveMenuSettingKey: (value: MenuItemValue) => void;
    deleteProjectDisclosure: any;
    currentSelectedColor: string;
    setCurrentSelectedColor: (color: string) => void;
    sourceLanguageActiveKey?: string;
    setSourceLanguageActiveKey: (value: string) => void;
    filterValue: string;
    setFilterValue: (value: string) => void;
    activeKeys: string[];
    setActiveKeys: (value: string[]) => void;
    value: string;
    setValue: (value: string) => void;
    filter: (value: string) => SearchBarOption<string>[];
    onTagDelete: (value: string) => void;
    onCheck: (value: string) => void;
    informationsRef: React.RefObject<HTMLDivElement>;
    projectColorRef: React.RefObject<HTMLDivElement>;
    sourceLanguageRef: React.RefObject<HTMLDivElement>;
    targetLanguageRef: React.RefObject<HTMLDivElement>;
}

export interface IUpdateProjectForm {
    projectName: string;
    sourceLanguage: string;
    targetLanguages: string[];
}
