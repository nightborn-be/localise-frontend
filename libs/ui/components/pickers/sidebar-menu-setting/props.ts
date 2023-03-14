import { Options } from './types'
export default interface SidebarMenuSettingProps<T> {
    options?: Array<Options<T>>,
    value?: T,
    onChange?: (value: T) => void
}