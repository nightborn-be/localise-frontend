export const enum ToastType {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

export interface IToastParams {
    type: ToastType;
    title: string;
    description?: string;
    delay?: number
}
