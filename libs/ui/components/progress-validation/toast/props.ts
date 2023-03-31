import { IToastParams } from './types';

export interface IToastProps extends IToastParams {
    onClose: () => void;
}
