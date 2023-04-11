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
import { IOrganisationSettingsProps } from './props';
import Button from '../../../components/inputs/button';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';

const OrganisationSettings = ({
    handleOnDeleteOrganisation,
    handleUpdateOrganisation,
    actualOrganisationUser,
    isLoadingUpdateOrganisation,
}: IOrganisationSettingsProps) => {
    const {
        form,
        onDrag,
        picturePath,
        informationsRef,
        membersRef,
        deleteOrganisationDisclosure,
        addMembersDisclosure,
        activeMenuSettingKey,
        setActiveMenuSettingKey,
    } = useOrganisationSettingsLogic({ actualOrganisationUser });
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
                    />
                    <HStack
                        w='full'
                        justifyContent={'right'}
                        padding='0rem 2rem 2rem 1.25rem'
                    >
                        <Button
                            isLoading={isLoadingUpdateOrganisation}
                            padding='0.25rem 0.75rem 0.25rem 0.75rem'
                            backgroundColor={COLORS.Localize.Purple.T500.value}
                            gap='0.25rem'
                            h={'2rem'}
                            w={'5rem'}
                            borderRadius={'0.5rem'}
                            hoverBackgroundColor={
                                COLORS.Localize.Purple.T600.value
                            }
                            font={FONTS.T1.T12px.SemiBold600.value}
                            color={COLORS.White.T500.value}
                            onClick={() => {
                                handleUpdateOrganisation(form);
                            }}
                        >
                            {t<string>(
                                tKeys.home.organisation_settings.cta.save,
                            )}
                        </Button>
                    </HStack>
                </VStack>
            </HStack>
            <DeleteOrganisationModal
                isOpen={deleteOrganisationDisclosure.isOpen}
                onClose={deleteOrganisationDisclosure.onClose}
                handleOnSubmit={handleOnDeleteOrganisation}
            />
            <AddMembersModal
                isOpen={addMembersDisclosure.isOpen}
                onClose={addMembersDisclosure.onClose}
            />
        </VStack>
    );
};
export default OrganisationSettings;
