import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import SidebarMenuSettingContent from './components/sidebar-menu-setting';
import useSettingsLogic from './logic';
import COLORS from '../../../../constants/colors';
import FONTS from '../../../../constants/fonts';
import { tKeys } from '../../../../../i18n/keys';
import { useTranslation } from 'react-i18next';
import InformationSettingSection from './components/informations-setting-section';
import LineSeparation from '../../organisation-settings/components/line-separation';
import ProjectColorsSettingSection from './components/project-colors-setting-section';
import Button from '../../../../components/inputs/button';
import { ISettingsProps } from './props';
import { DeleteModal } from '../../../../components/surface/delete-modal';
import SearchBarSelectSettingSection from './components/searchbar-select-setting-section/index';
import SearchBoxSettingSection from './components/search-box-setting-section/index';

const Settings = ({
    handleOnUpdateProject,
    handleOnDeleteProject,
    isLoadingUpdateProject,
    isLoadingDeleteProject,
    projectData,
    projectLanguages,
}: ISettingsProps) => {
    const {
        sourceLanguageActiveKey,
        setSourceLanguageActiveKey,
        filterValue,
        setFilterValue,
        setTargetLanguageChoice,
        targetLanguageChoice,
        value,
        setValue,
        form,
        activeMenuSettingKey,
        setActiveMenuSettingKey,
        deleteProjectDisclosure,
        currentSelectedColor,
        setCurrentSelectedColor,
        filter,
        onTagDelete,
        onCheck,
        informationsRef,
        projectColorRef,
        sourceLanguageRef,
        targetLanguagesRef,
        optionsSourceLanguage,
    } = useSettingsLogic({ projectData, projectLanguages });

    const { t } = useTranslation();
    return (
        <>
            <HStack
                w='full'
                alignItems='start'
                justifyContent={'start'}
                spacing='0rem'
            >
                <SidebarMenuSettingContent
                    setActiveMenuSettingKey={setActiveMenuSettingKey}
                    activeMenuSettingKey={activeMenuSettingKey}
                    informationsRef={informationsRef}
                    projectColorRef={projectColorRef}
                    sourceLanguageRef={sourceLanguageRef}
                    targetLanguagesRef={targetLanguagesRef}
                />
                <VStack
                    w='full'
                    overflowY={'scroll'}
                    h='full'
                >
                    <InformationSettingSection
                        projectId={projectData?.id as string}
                        form={form}
                        deleteProjectDisclosure={deleteProjectDisclosure}
                        informationsRef={informationsRef}
                    />
                    <LineSeparation />
                    <ProjectColorsSettingSection
                        currentSelectedColor={currentSelectedColor}
                        setCurrentSelectedColor={setCurrentSelectedColor}
                        projectColorsRef={projectColorRef}
                    />
                    <LineSeparation />
                    <SearchBarSelectSettingSection
                        sourceLanguageRef={sourceLanguageRef}
                        filterValue={filterValue}
                        form={form}
                        optionsSourceLanguage={optionsSourceLanguage}
                        setFilterValue={setFilterValue}
                        setSourceLanguageActiveKey={setSourceLanguageActiveKey}
                        sourceLanguageActiveKey={sourceLanguageActiveKey}
                    />
                    <LineSeparation />
                    <VStack w='full' spacing={'0rem'}>
                        <SearchBoxSettingSection
                            targetLanguagesRef={targetLanguagesRef}
                            activeKeys={targetLanguageChoice}
                            filter={filter}
                            value={value}
                            onCheck={onCheck}
                            onTagDelete={onTagDelete}
                            setValue={setValue}
                        />
                        <HStack
                            w={'full'}
                            padding={'0rem 2rem 2rem'}
                            justifyContent={'right'}
                            alignItems={'center'}
                        >
                            <Button
                                isLoading={isLoadingUpdateProject}
                                backgroundColor={
                                    COLORS.Localize.Purple.T500.value
                                }
                                font={FONTS.T1.T12px.SemiBold600.value}
                                color={COLORS.White.T500.value}
                                padding={'0.25rem 0.75rem'}
                                gap={'0.25rem'}
                                spacing='0.25rem'
                                height={'2rem'}
                                w={'5rem'}
                                borderRadius={'0.5rem'}
                                onClick={() => {
                                    handleOnUpdateProject(form);
                                }}
                            >
                                {t<string>(
                                    tKeys.home.project.tab.settings.content.cta
                                        .save,
                                )}
                            </Button>
                        </HStack>
                    </VStack>
                </VStack>
            </HStack>
            <DeleteModal
                isLoading={isLoadingDeleteProject}
                isOpen={deleteProjectDisclosure.isOpen}
                onClose={deleteProjectDisclosure.onClose}
                handleOnSubmit={handleOnDeleteProject}
                titleModal={t<string>(
                    tKeys.home.project.tab.settings.delete_modal.title_header,
                )}
                title={t<string>(
                    tKeys.home.project.tab.settings.delete_modal.title,
                )}
                description={t<string>(
                    tKeys.home.project.tab.settings.delete_modal.description,
                )}
            />
        </>
    );
};
export default Settings;
