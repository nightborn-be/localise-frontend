import { ReactNode } from 'react';

export interface PageProps {
    children: ReactNode | ReactNode[];
    bg?: string;
    bgImage?: string;
    // selectedItem : SideItem
    // setSelectItem :(item: SideItem) => void
}
