import React, { useRef, useState } from 'react';
import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import Breadcrumb from '../../../components/navigation/breadcrumb';
import SidebarMenuSetting from '../../../components/navigation/sidebar-menu-setting';
import { MenuItemValue } from '../../../components/navigation/sidebar-menu-setting/types';
import InputLabel from '../../../components/inputs/input-label';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Input from '../../../components/inputs/input';
import { useOrganisationSettingsLogic } from './logic';
import Button from '../../../components/inputs/button';
import { EnhancerProps } from '../../../components/inputs/button/props';
import Icon from '../../../components/contents/icon';
import ButtonIcon from '../../../components/inputs/button-icon';
import { ButtonSize } from '../../../components/inputs/button-icon/types';
import TableHeader from '../../../components/table/table-header';
import TableRow from '../../../components/table/table-row';
import Dropzone from '../../auth/sign-up/organisation/picture/component/dropzone';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import Text from '../../../components/contents/text';

const OrganisationSettings = () => {
    const {
        form,
        setOrganisationPicture,
        handleOnSubmit,
        handleOnDelete,
        pictureUrl,
        getInitialeName,
    } = useOrganisationSettingsLogic();
    const [activeKey, setActiveKey] = useState(MenuItemValue.INFORMATIONS);
    const { t } = useTranslation();
    const informationRef = useRef<HTMLDivElement>(null);
    const membersRef = useRef<HTMLDivElement>(null);
    return (
        <VStack h='full' w='full' alignItems={'left'} padding='0px'>
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
                spacing='0px'
            >
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
                                    tKeys.home.organisation_settings.menu_item
                                        .members,
                                ),
                                value: MenuItemValue.MEMBERS,
                            },
                        ]}
                        value={activeKey}
                        onChange={(value) => {
                            setActiveKey(value);
                            switch (value) {
                                case MenuItemValue.INFORMATIONS:
                                    informationRef.current?.scrollIntoView({
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
                <VStack
                    w={'full'}
                    alignItems='left'
                    justifyContent={'left'}
                    spacing='0px'
                >
                    <HStack
                        spacing='100px'
                        w='full'
                        padding={'32px 100px 0px 20px'}
                    >
                        <VStack
                            alignItems={'left'}
                            spacing='20px'
                            padding={'0px'}
                            w='full'
                            ref={informationRef}
                        >
                            <InputLabel
                                label={t<string>(
                                    tKeys.home.organisation_settings.menu.form
                                        .informations.title,
                                )}
                                description={t<string>(
                                    tKeys.home.organisation_settings.menu.form
                                        .informations.description,
                                )}
                                labelColor={COLORS.Text.T400.value}
                                labelFont={FONTS.T1.T16px.SemiBold600.value}
                                descriptionColor={COLORS.InputText.value}
                                descriptionFont={
                                    FONTS.T1.T12px.Regular400.value
                                }
                                spacing='0.5rem'
                            />
                            <Input
                                padding='0.625rem'
                                placeholder=''
                                font={FONTS.T1.T12px.Regular400.value}
                                labelColor={COLORS.Text.T500.value}
                                labelFont={FONTS.T1.T14px.Medium500.value}
                                {...form.organisationName}
                            />
                            <Button
                                onClick={handleOnDelete}
                                color={COLORS.InputText.value}
                                font={FONTS.T1.T12px.Medium500.value}
                                w={'fit-content'}
                                h={'fit-content'}
                                _active={{ bg: 'transparent' }}
                                alignItems='left'
                                justifyContent={'left'}
                                borderRadius='0px'
                                padding='0rem'
                                gap='0.5rem'
                                backgroundColor='transparent'
                                hoverColor={COLORS.Error.T500.value}
                                startEnhancer={(
                                    enhancer: EnhancerProps,
                                ): React.ReactElement => (
                                    <Icon
                                        name='trashXs'
                                        fill={
                                            enhancer.isHovered
                                                ? COLORS.Error.T500.value
                                                : COLORS.InputText.value
                                        }
                                    />
                                )}
                            >
                                {t<string>(
                                    tKeys.home.organisation_settings.menu.form
                                        .informations.cta.delete,
                                )}
                            </Button>
                        </VStack>
                        <HStack
                            position={'relative'}
                            minW={'120px'}
                            width='120px'
                            height={'120px'}
                            borderRadius='100px'
                            justifyContent={'center'}
                            bg={COLORS.Line.value}
                        >
                            {pictureUrl ? (
                                <Image
                                    src={pictureUrl}
                                    alt=''
                                    width='120px'
                                    height={'120px'}
                                    borderRadius='100px'
                                />
                            ) : (
                                <Text
                                    font={FONTS.T1.T44px.Medium500.value}
                                    color={COLORS.Text.T400.value}
                                >
                                    {getInitialeName()}
                                </Text>
                            )}
                            <Box
                                position={'absolute'}
                                top='85px'
                                bottom='0'
                                right='0'
                            >
                                <Dropzone onDrag={setOrganisationPicture}>
                                    <ButtonIcon
                                        size={ButtonSize.SMALL}
                                        border={`4px solid ${COLORS.White.T500.value}`}
                                        borderRadius='60px'
                                        bg={COLORS.Line.value}
                                    >
                                        <Icon
                                            name='edit'
                                            width='12'
                                            height='12'
                                        />
                                    </ButtonIcon>
                                </Dropzone>
                            </Box>
                        </HStack>
                    </HStack>
                    <VStack
                        padding={'40px 32px 40px 20px'}
                        spacing='20px'
                        justifyContent={'center'}
                        alignItems='center'
                        w='full'
                    >
                        <Box w={'full'} height={'1px'} bg={COLORS.Line.value} />
                    </VStack>
                    <VStack
                        position={'relative'}
                        alignItems={'left'}
                        padding='0px 32px 32px 20px'
                        w='full'
                        ref={membersRef}
                    >
                        <HStack>
                            <InputLabel
                                label={t<string>(
                                    tKeys.home.organisation_settings.menu.form
                                        .members.title,
                                )}
                                description={t<string>(
                                    tKeys.home.organisation_settings.menu.form
                                        .members.description,
                                )}
                                labelColor={COLORS.Text.T400.value}
                                labelFont={FONTS.T1.T16px.SemiBold600.value}
                                descriptionColor={COLORS.InputText.value}
                                descriptionFont={
                                    FONTS.T1.T12px.Regular400.value
                                }
                                spacing='0.5rem'
                            />
                            <Button
                                font={FONTS.T1.T12px.SemiBold600.value}
                                w={'7.625rem'}
                                minW='7.625rem'
                                h={'2rem'}
                                padding='0.375rem 0.5rem'
                                gap='0.25rem'
                                spacing='0.25rem'
                                border={`none`}
                                borderRadius='0.5rem'
                                backgroundColor={'transparent'}
                                startEnhancer={(): React.ReactElement => (
                                    <Icon
                                        name='addLarge'
                                        stroke={
                                            COLORS.Localize.Purple.T500.value
                                        }
                                    />
                                )}
                                color={COLORS.Localize.Purple.T500.value}
                                hoverBackgroundColor={
                                    COLORS.Communication.BG.value
                                }
                            >
                                {t<string>(
                                    tKeys.home.organisation_settings.menu.form
                                        .members.cta.add_member,
                                )}
                            </Button>
                        </HStack>
                    </VStack>
                    <VStack
                        alignItems={'left'}
                        w='full'
                        padding='0px 32px 32px 20px'
                        spacing={0}
                    >
                        <TableHeader />
                        <VStack spacing='0.5rem'>
                            <TableRow
                                avatarPicture='/assets/images/avatar.png'
                                firstName='Pierre'
                                lastName='De Moor'
                            />
                            <TableRow
                                avatarPicture='/assets/images/avatar.png'
                                firstName='Pierre'
                                lastName='De Moor'
                            />
                        </VStack>
                    </VStack>
                    <HStack
                        w='full'
                        justifyContent={'right'}
                        padding='0px 32px 32px 20px'
                    >
                        <Button
                            padding='0.25rem 0.75rem 0.25rem 0.75rem'
                            backgroundColor={COLORS.Localize.Purple.T500.value}
                            gap='0.25rem'
                            h={'2rem'}
                            w={'80px'}
                            borderRadius={'0.5rem'}
                            hoverBackgroundColor={
                                COLORS.Localize.Purple.T600.value
                            }
                            font={FONTS.T1.T12px.SemiBold600.value}
                            color={COLORS.White.T500.value}
                            onClick={handleOnSubmit}
                        >
                            {t<string>(
                                tKeys.home.organisation_settings.cta.save,
                            )}
                        </Button>
                    </HStack>
                </VStack>
            </HStack>
        </VStack>
    );
};
export default OrganisationSettings;
