import { IDefaultForm, IForm } from "utils/formik";
import { IUpdateProjectForm } from "../../types";

export interface IProjectColorsSettingSectionProps {
    projectColorsRef?: React.RefObject<HTMLDivElement>;
    currentSelectedColor: string;
    setCurrentSelectedColor: (color: string) => void;
}
