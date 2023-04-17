import React from 'react';
import { VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ISidebarMenuSettingContentProps } from './props';
import SidebarMenuSetting from '../../../../../../../components/navigation/sidebar-menu-setting';
import { MenuItemValue } from '../../../../../../../components/navigation/sidebar-menu-setting/types';
const SidebarMenuSettingContent = ({
    activeMenuSettingKey,
    setActiveMenuSettingKey,
    informationsRef,
    projectColorRef,
    sourceLanguageRef,
    targetLanguageRef,
}: ISidebarMenuSettingContentProps) => {
    // Attributes
    const { t } = useTranslation();
    // Render
    return (
        <VStack h='fit-content'>
            <SidebarMenuSetting
                options={[
                    {
                        title: 'Informations',
                        value: MenuItemValue.INFORMATIONS,
                    },
                    {
                        title: 'Project color',
                        value: MenuItemValue.PROJET_COLOR,
                    },
                    {
                        title: 'Source language',
                        value: MenuItemValue.SOURCE_LANGUAGE,
                    },
                    {
                        title: 'Target languages',
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
                            targetLanguageRef?.current?.scrollIntoView({
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
