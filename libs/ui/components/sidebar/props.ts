import { CreateProjectDTO } from "../../../gateways/resource-api/types";

export interface ISideBarContentProps {
    handleOnCreateProject: (value: CreateProjectDTO) => void;
}