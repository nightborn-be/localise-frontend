import { SidebarMenuSettingOption } from "./types";

export interface ISidebarMenuSettingProps<T> {
    options?: SidebarMenuSettingOption<T>[],
    value: T,
    onChange?: (value: T) => void
}