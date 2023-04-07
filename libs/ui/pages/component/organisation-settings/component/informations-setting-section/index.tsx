import React from 'react';
import { HStack } from '@chakra-ui/react';
import { IInformationSettingSectionProps } from './props';
import OrganisationPicture from './components/organisation-picture';
import EditOrganisationContent from './components/edit-organisation-content';

export const InformationSettingSection = ({
    informationsRef,
    form,
    organisationName,
    deleteOrganisationDisclosure,
    pictureUrl,
    setOrganisationPicture,
}: IInformationSettingSectionProps) => {
    return (
        <HStack
            spacing='6.25rem'
            w='full'
            padding={'2rem 6.25rem 0rem 1.25rem'}
        >
            <EditOrganisationContent
                informationsRef={informationsRef}
                form={form}
                deleteOrganisationDisclosure={deleteOrganisationDisclosure}
            />
            <OrganisationPicture
                pictureUrl={pictureUrl}
                organisationName={organisationName}
                setOrganisationPicture={setOrganisationPicture}
            />
        </HStack>
    );
};

export default InformationSettingSection;
