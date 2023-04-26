import { IOrganisationSettingsForm } from 'ui/components/contents/organisation-settings/types';
import { IDefaultForm, IForm } from 'utils/formik';

export interface OrganisationSettingsPageLogicType {
    handleOnDeleteOrganisation: () => void;
    handleUpdateOrganisation: (
        form: IForm<IOrganisationSettingsForm> & IDefaultForm,
    ) => void;
    isLoadingUpdateOrganisation: boolean;
}
