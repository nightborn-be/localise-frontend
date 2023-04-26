import React from 'react';
import { VStack } from '@chakra-ui/react';
import SidebarMenuSetting from '../../../../../components/navigation/sidebar-menu-setting/index';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../i18n/keys';
import { MenuItemValue } from '../../../../../components/navigation/sidebar-menu-setting/types';
import { ISidebarMenuSettingContentProps } from './props';
const SidebarMenuSettingContent = ({
    activeMenuSettingKey,
    setActiveMenuSettingKey,
    informationsRef,
    membersRef,
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
                            tKeys.home.organisation_settings.menu_item
                                .informations,
                        ),
                        value: MenuItemValue.INFORMATIONS,
                    },
                    {
                        title: t<string>(
                            tKeys.home.organisation_settings.menu_item.members,
                        ),
                        value: MenuItemValue.MEMBERS,
                    },
                ]}
                value={activeMenuSettingKey}
                onChange={(value) => {
                    setActiveMenuSettingKey(value);
                    switch (value) {
                        case MenuItemValue.INFORMATIONS:
                            informationsRef.current?.scrollIntoView({
                                behavior: 'smooth',
                            });
                            break;
                        case MenuItemValue.MEMBERS:
                            membersRef.current?.scrollIntoView({
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
