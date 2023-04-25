import { IDefaultForm, IForm } from 'utils/formik';
import { IOrganisationSettingsForm } from './types';
import { OrganisationDTO } from 'gateways/resource-api/types';

export interface IOrganisationSettingsProps {
    handleOnDeleteOrganisation: () => void;
    handleUpdateOrganisation: (
        form: IForm<IOrganisationSettingsForm> & IDefaultForm,
    ) => void;
    isLoadingUpdateOrganisation: boolean;
    actualOrganisationUser?: OrganisationDTO;
}

export interface IOrganisationSettingsLogicProps {
    actualOrganisationUser?: OrganisationDTO;
}
