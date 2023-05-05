import { TermDTO } from 'gateways/resource-api/types';

export interface IMissingTermsProps {
    addNewRowTerm: (term: TermDTO) => void;
}
