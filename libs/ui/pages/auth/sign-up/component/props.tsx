export interface IContentSignUpProps {
    children: React.ReactNode | React.ReactNode[];
    title: string;
    w?: string;
    isLater?: boolean;
    handleOnContinue: () => void;
    handleOnLater?: () => void;
}
