import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import SidebarMenuSettingContent from './components/sidebar-menu-setting';
import useSettingsLogic from './logic';
import COLORS from '../../../../../constants/colors';
import FONTS from '../../../../../constants/fonts';
import { tKeys } from '../../../../../../i18n/keys';
import { useTranslation } from 'react-i18next';
import InformationSettingSection from './components/informations-setting-section';
import LineSeparation from '../../../organisation-settings/components/line-separation';
import ProjectColorsSettingSection from './components/project-colors-setting-section';
import SearchbarSelect from '../../../../../components/inputs/searchbar-select';
import { SearchBarOption } from '../../../../../components/inputs/searchbar/props';
import languages from 'utils/languages';
import SearchBox from '../../../../../components/contents/search-box';
import Button from '../../../../../components/inputs/button';
import { ISettingsProps } from './props';
import { DeleteModal } from '../../../../../components/surface/delete-modal';
const Settings = ({
    handleOnUpdateProject,
    handleOnDeleteProject,
    activeProject,
}: ISettingsProps) => {
    const {
        sourceLanguageActiveKey,
        setSourceLanguageActiveKey,
        filterValue,
        setFilterValue,
        activeKeys,
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
        targetLanguageRef,
    } = useSettingsLogic({ activeProject });
    const options: SearchBarOption<string>[] = languages.map((language) => ({
        value: language.name,
        label: language.name,
    }));
    const { t } = useTranslation();
    return (
        <VStack
            h='full'
            w='full'
            alignItems={'left'}
            padding='0rem'
            overflowY={'scroll'}
        >
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
                    targetLanguageRef={targetLanguageRef}
                />
                <VStack w='full'>
                    <InformationSettingSection
                        projectId={activeProject?.id as string}
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
                    <Box
                        w='full'
                        padding='0rem 2rem 0rem 1.25rem'
                        ref={sourceLanguageRef}
                    >
                        <SearchbarSelect
                            color={COLORS.Text.T400.value}
                            h='2.5rem'
                            padding='0rem 2rem 0rem 1.25rem'
                            spacing='0.5rem'
                            background={COLORS.White.T500.value}
                            placeholder={t<string>(
                                tKeys.home.project.tab.settings.content
                                    .source_language.search.placeholder,
                            )}
                            placeholderColor={COLORS.InputText.value}
                            borderRadius='0.375rem'
                            defaultSelectValue={t<string>(
                                tKeys.home.project.tab.settings.content
                                    .source_language.placeholder,
                            )}
                            noValueMsg={t<string>(
                                tKeys.home.project.tab.settings.content
                                    .source_language.search.not_found,
                            )}
                            filterValue={filterValue}
                            activeKey={sourceLanguageActiveKey}
                            onSelect={(value) => {
                                setSourceLanguageActiveKey(value);
                                form.sourceLanguage.onChange(value);
                            }}
                            onChange={(event) =>
                                setFilterValue(event.target.value)
                            }
                            options={options.filter((option) =>
                                option.value
                                    .toLowerCase()
                                    .includes(filterValue.toLowerCase()),
                            )}
                            label={t<string>(
                                tKeys.home.project.tab.settings.content
                                    .source_language.title,
                            )}
                            description={t<string>(
                                tKeys.home.project.tab.settings.content
                                    .source_language.description,
                            )}
                        />
                    </Box>
                    <LineSeparation />
                    <Box
                        w='full'
                        padding='0rem 2rem 2rem 1.25rem'
                        ref={targetLanguageRef}
                    >
                        <SearchBox<string>
                            w='full'
                            bgColor={COLORS.White.T500.value}
                            border='none'
                            padding='0px'
                            title={t<string>(
                                tKeys.home.project.tab.settings.content
                                    .target_languages.title,
                            )}
                            description={t<string>(
                                tKeys.home.project.tab.settings.content
                                    .target_languages.description,
                            )}
                            placeholder={t<string>(
                                tKeys.home.project.tab.settings.content
                                    .target_languages.placeholder,
                            )}
                            noValueMsg={t<string>(
                                tKeys.home.project.tab.settings.content
                                    .target_languages.not_found,
                            )}
                            onTagDelete={onTagDelete}
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                            onCheck={onCheck}
                            activeKeys={activeKeys}
                            options={filter(value)}
                        />
                    </Box>
                    <HStack
                        w={'full'}
                        padding={'0rem 2rem 2rem'}
                        justifyContent={'right'}
                        alignItems={'center'}
                    >
                        <Button
                            backgroundColor={COLORS.Localize.Purple.T500.value}
                            font={FONTS.T1.T12px.SemiBold600.value}
                            color={COLORS.White.T500.value}
                            padding={'0.25rem 0.75rem'}
                            gap={'0.25rem'}
                            spacing='0.25rem'
                            height={'2rem'}
                            w={'5rem'}
                            borderRadius={'8px'}
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
            </HStack>
            <DeleteModal
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
        </VStack>
    );
};
export default Settings;
