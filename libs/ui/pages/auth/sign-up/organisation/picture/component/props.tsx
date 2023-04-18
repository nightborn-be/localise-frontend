import { Font } from '../../../../../../constants/fonts';

export interface IDropzoneProps {
    onDrag?: (pictureUrl: string, binary: string | ArrayBuffer | null) => void;
    children?: React.ReactNode | React.ReactNode[];
}
