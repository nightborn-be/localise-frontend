import { Font } from '../../../constants/fonts';

export interface IInputLabelProps {
    label?: string;
    description?: string;
    lineHeight?: string;
    margin?: string;
    labelFont?: Font;
    labelColor?: string;
    descriptionFont?: Font;
    descriptionColor?: string;
    spacing?: string;
    maxWidth?: string;
    maxHeight?: string;
}
