import { IDefaultForm, IForm } from '../../../../../../utils/formik';
import { IOrganisationSettingsForm } from '../../types';

export interface IInformationSettingSectionProps {
    informationsRef: React.RefObject<HTMLDivElement>;
    form: IForm<IOrganisationSettingsForm> & IDefaultForm;
    deleteOrganisationDisclosure: any;
    organisationName: string;
    pictureUrl: string;
    onDrag: (pictureUrl: string, binary: string | ArrayBuffer | null) => void;
}
