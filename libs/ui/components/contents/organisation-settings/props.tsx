import { IDefaultForm, IForm } from 'utils/formik';
import { IOrganisationSettingsForm } from './types';
import {
    OrganisationDTO,
    UserWithMembershipPagingDTO,
} from 'gateways/resource-api/types';

export interface IOrganisationSettingsProps {
    handleOnDeleteOrganisation: () => void;
    handleUpdateOrganisation: (
        form: IForm<IOrganisationSettingsForm> & IDefaultForm,
    ) => void;
    isLoadingUpdateOrganisation: boolean;
    actualOrganisationUser?: OrganisationDTO;
    members?: UserWithMembershipPagingDTO;
}

export interface IOrganisationSettingsLogicProps {
    actualOrganisationUser?: OrganisationDTO;
}
