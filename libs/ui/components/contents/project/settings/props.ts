import { ProjectDTO } from 'gateways/resource-api/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { IUpdateProjectForm } from './types';

export interface ISettingsProps {
    handleOnUpdateProject: (
        form: IForm<IUpdateProjectForm> & IDefaultForm,
    ) => void;
    handleOnDeleteProject: () => void;
    activeProject?: ProjectDTO;
    isLoadingUpdateProject: boolean;
    isLoadingDeleteProject: boolean;
}

export interface ISettingsLogicProps {
    activeProject?: ProjectDTO;
}
