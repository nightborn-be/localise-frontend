import { CreateOrganisationDTO } from '../../../../gateways/resource-api/types';

export const toCreateOrganisationDTO = (
    organisationName: string,
    pictureBinary?: string,
): CreateOrganisationDTO => {
    const res: CreateOrganisationDTO = {
        name: organisationName,
        pictureContent: pictureBinary,
    };

    return res;
};
