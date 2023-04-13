import { UpdateTermDTO } from 'gateways/resource-api/types';

export const toUpdateTermDTO = (
    name: string,
    description: string,
): UpdateTermDTO => {
    return { name: name, description: description };
};
