export const enum ToastType {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    INFOMRATION = 'INFORMATION'
}

export interface IToastParams {
    type: ToastType;
    title: string;
    description?: string;
    delay?: number;
}
