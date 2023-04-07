import { OrganisationDTO } from '../../../../gateways/resource-api/types';
import { IDefaultForm, IForm } from '../../../../utils/formik';
import { MenuItemValue } from '../../../components/navigation/sidebar-menu-setting/types';

export interface OrganisationSettingsLogicType {
    handleOnSubmit: () => void;
    form: IForm<IOrganisationSettingsForm> & IDefaultForm;
    onDrag: (pictureUrl: string, binary: string | ArrayBuffer | null) => void;
    picturePath: string;
    isLoading: boolean;
    actualOrganisationUser: OrganisationDTO | undefined;
    informationsRef: React.RefObject<HTMLDivElement>;
    membersRef: React.RefObject<HTMLDivElement>;
    deleteOrganisationDisclosure: any;
    addMembersDisclosure: any;
    activeMenuSettingKey: MenuItemValue;
    setActiveMenuSettingKey: (value: MenuItemValue) => void;
}

export interface IOrganisationSettingsForm {
    organisationName: string;
}
