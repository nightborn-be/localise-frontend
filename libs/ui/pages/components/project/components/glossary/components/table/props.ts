import { ReactNode } from "react";

export interface ITableTermProps {
    children?: ReactNode | ReactNode[]
    ref: React.RefObject<HTMLDivElement>
    setSearchFilterValue: (value: string) => void
    searchFilterValue: string
    setSortValue: (value: string) => void,
    sortValue: string,
}