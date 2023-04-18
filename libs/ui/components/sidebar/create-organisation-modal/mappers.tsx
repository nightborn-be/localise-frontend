import { CreateOrganisationDTO } from '../../../../gateways/resource-api/types';

export const toCreateOrganisationDTO = (
    organisationName: string,
    pictureBinary?: ArrayBuffer,
): CreateOrganisationDTO => {
    const res: CreateOrganisationDTO = {
        name: organisationName,
        pictureContent: Buffer.from(pictureBinary as ArrayBuffer).toString(
            'base64',
        ),
    };

    return res;
};
