export type SidebarMenuSettingOption<T> = {
    title?: string,
    value: T,
}

export enum MenuItemValue {
    INFORMATION = "INFORMATION",
    PROJET_COLOR = "PROJECT_COLOR",
    SOURCE_LANGUAGE = "SOURCE_LANGUAGE",
    TARGET_LANGUAGES = "TARGET_LANGUAGES"
}