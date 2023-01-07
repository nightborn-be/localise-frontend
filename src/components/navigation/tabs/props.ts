import { ReactElement } from 'react';
import { ITabProps } from './tab/props';

export interface ITabsProps {
  activeKey?: React.Key;
  onChange?: (activeKey: React.Key) => void;
  children: ReactElement<ITabProps> | Array<ReactElement<ITabProps>>;
}

export default ITabsProps;
