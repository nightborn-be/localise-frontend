import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import SidebarMenuSettingContent from './components/sidebar-menu-setting';
import useSettingsLogic from './logic';
import InputLabel from '../../../../../components/inputs/input-label';
import COLORS from '../../../../../constants/colors';
import FONTS from '../../../../../constants/fonts';
import { tKeys } from '../../../../../../i18n/keys';
import { useTranslation } from 'react-i18next';
import InformationSettingSection from './components/informations-setting-section';
import LineSeparation from '../../../organisation-settings/components/line-separation';
import ProjectColorsSettingSection from './components/project-colors-setting-section';
import SearchbarSelect from '../../../../../components/inputs/searchbar-select';
const Settings = () => {
    const {
        form,
        activeMenuSettingKey,
        setActiveMenuSettingKey,
        deleteProjectDisclosure,
        currentSelectedColor,
        setCurrentSelectedColor,
    } = useSettingsLogic();
    const { t } = useTranslation();
    return (
        <VStack h='full' w='full' alignItems={'left'} padding='0rem'>
            <HStack
                w='full'
                alignItems='start'
                justifyContent={'start'}
                spacing='0rem'
            >
                <SidebarMenuSettingContent
                    setActiveMenuSettingKey={setActiveMenuSettingKey}
                    activeMenuSettingKey={activeMenuSettingKey}
                />
                <VStack w='full'>
                    <InformationSettingSection
                        projectId={'9d7516a8-39b7-43d4-af09-a4f6c914b200'}
                        form={form}
                        deleteProjectDisclosure={deleteProjectDisclosure}
                    />
                    <LineSeparation />
                    <ProjectColorsSettingSection
                        currentSelectedColor={currentSelectedColor}
                        setCurrentSelectedColor={setCurrentSelectedColor}
                    />
                    <LineSeparation />
                    {/* <SearchbarSelect
                        color={COLORS.Text.T400.value}
                        w='36.875rem'
                        h='2.5rem'
                        padding='0.25rem 0.625rem'
                        spacing='0.5rem'
                        background={COLORS.White.T500.value}
                        placeholder={t<string>(
                            tKeys.home.modal.create_project.form.source_language
                                .search.placeholder,
                        )}
                        placeholderColor={COLORS.InputText.value}
                        borderRadius='0.375rem'
                        defaultSelectValue={t<string>(
                            tKeys.home.modal.create_project.form.source_language
                                .placeholder,
                        )}
                        noValueMsg={t<string>(
                            tKeys.home.modal.create_project.form.source_language
                                .search.not_found,
                        )}
                        filterValue={filterValue}
                        activeKey={sourceLanguageActiveKey}
                        onSelect={(value) => {
                            setSourceLanguageActiveKey(value);
                            form.sourceLanguage.onChange(value);
                        }}
                        onChange={(event) => setFilterValue(event.target.value)}
                        options={options.filter((option) =>
                            option.value
                                .toLowerCase()
                                .includes(filterValue.toLowerCase()),
                        )}
                        label={t<string>(
                            tKeys.home.modal.create_project.form.source_language
                                .title,
                        )}
                        description={t<string>(
                            tKeys.home.modal.create_project.form.source_language
                                .description,
                        )}
                    /> */}
                </VStack>
            </HStack>
        </VStack>
    );
};
export default Settings;
