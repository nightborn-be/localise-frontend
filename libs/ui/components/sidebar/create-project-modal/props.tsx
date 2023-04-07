import { CreateProjectDTO } from '../../../../gateways/resource-api/types';

export interface ICreateProjectProps {
    isOpen: boolean;
    onClose: () => void;
    handleOnSubmit: (value: CreateProjectDTO) => void;
}
