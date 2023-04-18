import { IDefaultForm, IForm } from 'utils/formik';
import { IUpdateProjectForm } from '../../types';

export interface IInformationSettingSectionProps {
    informationsRef?: React.RefObject<HTMLDivElement>;
    form: IForm<IUpdateProjectForm> & IDefaultForm;
    deleteProjectDisclosure: any;
    projectId: string;
}
