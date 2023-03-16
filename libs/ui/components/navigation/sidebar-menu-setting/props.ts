import { Options } from './types'
export interface ISidebarMenuSettingProps<T> {
    options?: Array<Options<T>>,
    value?: T,
    onChange?: (value: T) => void
}