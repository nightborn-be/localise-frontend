import { ProjectDTO, TermPagingDTO } from 'gateways/resource-api/types';
import { IDefaultForm, IForm } from 'utils/formik';

export interface IProjectContentProps {
    projectTerms?: TermPagingDTO;
    activeProject?: ProjectDTO;
}

export interface IProjectContentPropsLogicProps {}
