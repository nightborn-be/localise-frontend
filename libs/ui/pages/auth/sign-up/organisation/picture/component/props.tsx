import { Font } from '../../../../../../constants/fonts';

export interface IDropzoneProps {
    onDrag?: (binary: string | ArrayBuffer | null) => void;
    h?: string;
    w?: string;
    font?: Font;
    iconHeight?: string;
    iconWidth?: string;
    spacing?: string;
    children?: React.ReactNode | React.ReactNode[];
}
