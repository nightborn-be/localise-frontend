import { ReactElement } from 'react';
import { Font } from '../../../constants/fonts';

export interface IModalProps {
    children?: React.ReactElement | React.ReactElement[];
    title?: string;
    isOpen: boolean;
    isDisableOnClose?: boolean;
    handleOnSubmit: () => void;
    isLoading?: boolean;
    onClose: () => void;
    header?: IModalHeaderProps;
    footer?: IModalFooterProps;
    body?: IModalBodyProps;
    isDisabled?: boolean;
}

interface IModalHeaderProps {
    bg?: string;
    font?: Font;
    color?: string;
    closeButtonColor?: string;
    closeButtonBgColor?: string;
    closeButtonHoverBgColor?: string;
}
interface IModalBodyProps {
    padding?: string;
}
interface IModalHeaderProps {
    bg?: string;
    font?: Font;
    color?: string;
    closeButtonColor?: string;
    closeButtonBgColor?: string;
    closeButtonHoverBgColor?: string;
}

interface IModalFooterProps {
    bg?: string;
    font?: Font;
    color?: string;
    padding?: string;
    justifyContent?: string;
    firstCtaLabel?: string;
    firstCtaColor?: string;
    firstCtaBgColor?: string;
    firstCtaBgHoverColor?: string;
    firstCtaFont?: Font;
    secondCtaLabel?: string;
    secondCtaColor?: string;
    secondCtaBgColor?: string;
    secondCtaBgHoverColor?: string;
    secondCtaFont?: Font;
    secondCtaStartEnhancer?: ReactElement;
    secondCtaWidth?: string;
    secondCtaHeight?: string;
}
