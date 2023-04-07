import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import Breadcrumb from '../../../components/navigation/breadcrumb';
import { useOrganisationSettingsLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import DeleteOrganisationModal from './components/delete-organisation-modal/index';
import AddMembersModal from './components/add-member-modal';
import SidebarMenuSettingContent from './components/sidebar-menu-setting';
import InformationSettingSection from './components/informations-setting-section';
import LineSeparation from './components/line-separation';
import MembersSettingSection from './components/members-setting-section';

const OrganisationSettings = () => {
    const {
        form,
        actualOrganisationUser,
        onDrag,
        handleOnSubmit,
        picturePath,
        isLoading,
        informationsRef,
        membersRef,
        deleteOrganisationDisclosure,
        addMembersDisclosure,
        activeMenuSettingKey,
        setActiveMenuSettingKey,
    } = useOrganisationSettingsLogic();
    // Attributes
    const { t } = useTranslation();

    // Render
    return (
        <VStack h='full' w='full' alignItems={'left'} padding='0rem'>
            <Breadcrumb
                elements={[
                    {
                        label: t<string>(
                            tKeys.home.organisation_settings.breadcrumb,
                        ),
                    },
                ]}
            />
            <HStack
                w='full'
                alignItems='start'
                justifyContent={'start'}
                spacing='0rem'
            >
                <VStack h='fit-content'>
                    <SidebarMenuSettingContent
                        activeMenuSettingKey={activeMenuSettingKey}
                        setActiveMenuSettingKey={setActiveMenuSettingKey}
                        informationsRef={informationsRef}
                        membersRef={membersRef}
                    />
                </VStack>
                <VStack
                    w={'full'}
                    alignItems='left'
                    justifyContent={'left'}
                    spacing='0rem'
                >
                    <InformationSettingSection
                        organisationName={actualOrganisationUser?.name ?? ''}
                        informationsRef={informationsRef}
                        deleteOrganisationDisclosure={
                            deleteOrganisationDisclosure
                        }
                        pictureUrl={picturePath}
                        form={form}
                        onDrag={onDrag}
                    />
                    <LineSeparation />
                    <MembersSettingSection
                        membersRef={membersRef}
                        addMembersDisclosure={addMembersDisclosure}
                        isLoading={isLoading}
                        handleOnSubmit={handleOnSubmit}
                    />
                </VStack>
            </HStack>
            <DeleteOrganisationModal
                isOpen={deleteOrganisationDisclosure.isOpen}
                onClose={deleteOrganisationDisclosure.onClose}
            />
            <AddMembersModal
                isOpen={addMembersDisclosure.isOpen}
                onClose={addMembersDisclosure.onClose}
            />
        </VStack>
    );
};
export default OrganisationSettings;
