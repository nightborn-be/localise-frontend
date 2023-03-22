export interface ITeammatesProps {
    onClick?: () => void,
    values: TeammatesOption[],
    buttonChildren: string,
}

export type TeammatesOption = {
    id: number;
    value?: string;
    content: React.ReactElement;
};