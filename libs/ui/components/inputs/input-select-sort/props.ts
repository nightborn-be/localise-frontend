import { SortOption } from "./types";

export interface IInputSelectSortProps {
    options: SortOption[]
    onClick: (value: string) => void
    valueSelected: string
}
