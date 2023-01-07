import { ReactNode } from "react";

export interface ITabProps {
	title: string;
	children?: ReactNode | ReactNode[];
	onSelect?: () => void;
	active?: boolean;
}
