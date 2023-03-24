import { ReactNode } from 'react';

export interface PageProps {
    children: ReactNode | ReactNode[];
    // selectedItem : SideItem
    // setSelectItem :(item: SideItem) => void
}
