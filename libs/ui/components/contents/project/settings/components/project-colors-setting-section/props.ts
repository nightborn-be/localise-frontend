export interface IProjectColorsSettingSectionProps {
    projectColorsRef?: React.RefObject<HTMLDivElement>;
    currentSelectedColor: string;
    setCurrentSelectedColor: (color: string) => void;
}
