import { CreateOrganisationDTO } from '../../../../gateways/resource-api/types';
import { IDefaultForm, IForm } from '../../../../utils/formik';
import { ICreateOrganisationForm } from './types';

export interface ICreateOrganisationProps {
    isOpen: boolean;
    onClose: () => void;
    handleOnSubmit: (
        form: IForm<ICreateOrganisationForm> & IDefaultForm,
        resetForm: () => void,
    ) => void;
}
