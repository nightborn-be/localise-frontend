export interface IContentSignUpProps {
    children: React.ReactNode | React.ReactNode[];
    title: string;
    w?: string;
    isLater?: boolean;
    isLoading?: boolean;
    handleOnContinue: () => void;
    handleOnLater?: () => void;
}
