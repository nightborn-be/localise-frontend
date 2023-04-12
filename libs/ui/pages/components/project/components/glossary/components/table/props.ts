import { ReactNode } from "react";

export interface ITableTermProps {
    children?: ReactNode | ReactNode[]
    ref: React.RefObject<HTMLDivElement>
}