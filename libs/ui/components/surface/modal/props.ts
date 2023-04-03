export interface IModalProps {
    children?: React.ReactElement | React.ReactElement[];
    title?: string;
    isOpen: boolean;
    handleOnSubmit: () => void;
    onClose: () => void;
}
