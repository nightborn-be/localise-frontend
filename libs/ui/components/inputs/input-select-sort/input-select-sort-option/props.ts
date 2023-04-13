import { ReactElement } from "react";
import { SortOption } from "../types";

export interface IInputSelectSortOption {
    option: SortOption
    onClick: (value: string) => void
    isSelected: boolean
    setIsMenuOpen: (value: boolean) => void
}