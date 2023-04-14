import { IDefaultForm, IForm } from "utils/formik";
import { MenuItemValue } from "../../../../../components/navigation/sidebar-menu-setting/types";

export interface SettingsLogicType {
    form: IForm<IUpdateProjectForm> & IDefaultForm;
    informationsRef?: React.RefObject<HTMLDivElement>;
    activeMenuSettingKey: MenuItemValue;
    setActiveMenuSettingKey: (value: MenuItemValue) => void;
    deleteProjectDisclosure: any;
    currentSelectedColor: string;
    setCurrentSelectedColor: (color: string) => void;
}

export interface IUpdateProjectForm {
    projectName: string;
    sourceLanguage: string;
    targetLanguages: string[];
}
