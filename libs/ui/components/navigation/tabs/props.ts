import { ReactElement } from 'react';
import { ITabProps } from './tab/props';

export interface ITabsProps {
    activeKey?: React.Key;
    onChange?: (activeKey: React.Key) => void;
    children:
    | ReactElement<ITabProps>
    | undefined
    | false
    | Array<ReactElement<ITabProps> | undefined | false>;
}