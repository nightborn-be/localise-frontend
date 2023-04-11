
import { IDefaultForm, IForm } from '../../../../utils/formik';
import { ICreateOrganisationForm } from '../../sidebar/create-organisation-modal/types';
import { ICreateProjectForm } from '../../sidebar/create-project-modal/types';

export interface PageLogicType {
    handleOnCreateProject: (
        form: IForm<ICreateProjectForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleOnCreateOrganisation: (
        form: IForm<ICreateOrganisationForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
    handleOnDeleteOrganisation: () => void;
}
