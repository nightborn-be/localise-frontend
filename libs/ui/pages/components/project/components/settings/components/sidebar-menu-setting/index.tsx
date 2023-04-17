import React from 'react';
import { VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ISidebarMenuSettingContentProps } from './props';
import SidebarMenuSetting from '../../../../../../../components/navigation/sidebar-menu-setting';
import { MenuItemValue } from '../../../../../../../components/navigation/sidebar-menu-setting/types';
import { tKeys } from 'i18n/keys';
const SidebarMenuSettingContent = ({
    activeMenuSettingKey,
    setActiveMenuSettingKey,
    informationsRef,
    projectColorRef,
    sourceLanguageRef,
    targetLanguagesRef,
}: ISidebarMenuSettingContentProps) => {
    // Attributes
    const { t } = useTranslation();
    // Render
    return (
        <VStack h='fit-content'>
            <SidebarMenuSetting
                options={[
                    {
                        title: t<string>(
                            tKeys.home.project.tab.settings.menu_item
                                .informations,
                        ),
                        value: MenuItemValue.INFORMATIONS,
                    },
                    {
                        title: t<string>(
                            tKeys.home.project.tab.settings.menu_item
                                .project_color,
                        ),
                        value: MenuItemValue.PROJET_COLOR,
                    },
                    {
                        title: t<string>(
                            tKeys.home.project.tab.settings.menu_item
                                .source_language,
                        ),
                        value: MenuItemValue.SOURCE_LANGUAGE,
                    },
                    {
                        title: t<string>(
                            tKeys.home.project.tab.settings.menu_item
                                .target_languages,
                        ),
                        value: MenuItemValue.TARGET_LANGUAGES,
                    },
                ]}
                value={activeMenuSettingKey}
                onChange={(value) => {
                    setActiveMenuSettingKey(value);
                    switch (value) {
                        case MenuItemValue.INFORMATIONS:
                            informationsRef?.current?.scrollIntoView({
                                behavior: 'smooth',
                            });
                            break;
                        case MenuItemValue.PROJET_COLOR:
                            projectColorRef?.current?.scrollIntoView({
                                behavior: 'smooth',
                            });
                            break;
                        case MenuItemValue.SOURCE_LANGUAGE:
                            sourceLanguageRef?.current?.scrollIntoView({
                                behavior: 'smooth',
                            });
                            break;
                        case MenuItemValue.TARGET_LANGUAGES:
                            targetLanguagesRef?.current?.scrollIntoView({
                                behavior: 'smooth',
                            });
                            break;
                    }
                }}
            />
        </VStack>
    );
};

export default SidebarMenuSettingContent;
