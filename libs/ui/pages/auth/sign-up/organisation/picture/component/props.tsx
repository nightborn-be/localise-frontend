import { Font } from '../../../../../../constants/fonts';

export interface IDropzoneProps {
    onDrag?: (value: string, binary?: string | ArrayBuffer | null) => void;
    label: string;
    h?: string;
    w?: string;
    font?: Font;
    iconHeight?: string;
    iconWidth?: string;
    spacing?: string;
}
