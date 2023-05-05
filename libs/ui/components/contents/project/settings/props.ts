import { LanguagePagingDTO, ProjectDTO } from 'gateways/resource-api/types';
import { IDefaultForm, IForm } from 'utils/formik';
import { IUpdateProjectForm } from './types';

export interface ISettingsProps {
    handleOnUpdateProject: (
        form: IForm<IUpdateProjectForm> & IDefaultForm,
    ) => void;
    handleOnDeleteProject: () => void;
    isLoadingUpdateProject: boolean;
    isLoadingDeleteProject: boolean;
    projectData?: ProjectDTO;
    projectLanguages?: LanguagePagingDTO;
}

export interface ISettingsLogicProps {
    projectData?: ProjectDTO;
    projectLanguages?: LanguagePagingDTO;
}
