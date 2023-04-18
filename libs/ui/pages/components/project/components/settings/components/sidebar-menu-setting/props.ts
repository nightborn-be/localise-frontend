import { MenuItemValue } from '../../../../../../../components/navigation/sidebar-menu-setting/types';

export interface ISidebarMenuSettingContentProps {
    activeMenuSettingKey: MenuItemValue;
    setActiveMenuSettingKey: (value: MenuItemValue) => void;
    informationsRef: React.RefObject<HTMLDivElement>;
    projectColorRef: React.RefObject<HTMLDivElement>;
    sourceLanguageRef: React.RefObject<HTMLDivElement>;
    targetLanguagesRef: React.RefObject<HTMLDivElement>;
}
