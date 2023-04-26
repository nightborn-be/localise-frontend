export interface IDeleteOrganisationProps {
    isOpen: boolean;
    onClose: () => void;
    handleOnSubmit: () => void;
    titleModal: string;
    title: string;
    description: string;
    isLoading: boolean;
}
