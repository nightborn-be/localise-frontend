import { IDefaultForm, IForm } from '../../../../utils/formik';
import { ICreateProjectForm } from './types';

export interface ICreateProjectProps {
    isOpen: boolean;
    onClose: () => void;
    isDisableOnCloseProjectModal: boolean;
    handleOnSubmit: (
        form: IForm<ICreateProjectForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
}

export interface ICreateProjectLogicProps {
    handleOnCreateProject: (
        form: IForm<ICreateProjectForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
}
