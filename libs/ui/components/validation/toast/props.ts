import { ToastStatus } from './types';
export interface IToastProps {
    title?: string
    w?: string,
    description?: string,
    status: ToastStatus,
    duration?: number,
    toast?: any,
}
