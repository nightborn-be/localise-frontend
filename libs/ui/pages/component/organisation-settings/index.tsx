import React, { useRef, useState } from 'react';
import { Box, HStack, Image, VStack, useDisclosure } from '@chakra-ui/react';
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
import DeleteOrganisationModal from '../../../components/sidebar/delete-organisation-modal';

const OrganisationSettings = () => {
    const {
        form,
        setOrganisationPicture,
        handleOnSubmit,
        pictureUrl,
        getInitialeName,
        isLoading,
    } = useOrganisationSettingsLogic();
    const [activeKey, setActiveKey] = useState(MenuItemValue.INFORMATIONS);
    const { t } = useTranslation();
    const informationRef = useRef<HTMLDivElement>(null);
    const membersRef = useRef<HTMLDivElement>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                    spacing='0rem'
                >
                    <HStack
                        spacing='6.25rem'
                        w='full'
                        padding={'2rem 6.25rem 0rem 1.25rem'}
                    >
                        <VStack
                            alignItems={'left'}
                            spacing='1.25rem'
                            padding={'0rem'}
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
                                onClick={onOpen}
                                color={COLORS.InputText.value}
                                font={FONTS.T1.T12px.Medium500.value}
                                w={'fit-content'}
                                h={'fit-content'}
                                _active={{ bg: 'transparent' }}
                                alignItems='left'
                                justifyContent={'left'}
                                borderRadius='0rem'
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
                            minW={'7.5rem'}
                            width='7.5rem'
                            height={'7.5rem'}
                            borderRadius='6.25rem'
                            justifyContent={'center'}
                            bg={COLORS.Line.value}
                        >
                            {pictureUrl ? (
                                <Image
                                    src={pictureUrl}
                                    alt=''
                                    width='7.5rem'
                                    height={'7.5rem'}
                                    borderRadius='6.25rem'
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
                                top='5.3125rem'
                                bottom='0'
                                right='0'
                            >
                                <Dropzone onDrag={setOrganisationPicture}>
                                    <ButtonIcon
                                        size={ButtonSize.SMALL}
                                        border={`0.25rem solid ${COLORS.White.T500.value}`}
                                        borderRadius='3.75rem'
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
                        padding={'2.5rem 2rem 2.5rem 1.25rem'}
                        spacing='1.25rem'
                        justifyContent={'center'}
                        alignItems='center'
                        w='full'
                    >
                        <Box
                            w={'full'}
                            height={'0.0625rem'}
                            bg={COLORS.Line.value}
                        />
                    </VStack>
                    <VStack
                        position={'relative'}
                        alignItems={'left'}
                        padding='0rem 2rem 2rem 1.25rem'
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
                        padding='0rem 2rem 2rem 1.25rem'
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
                        padding='0rem 2rem 2rem 1.25rem'
                    >
                        <Button
                            isLoading={isLoading}
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
                            onClick={handleOnSubmit}
                        >
                            {t<string>(
                                tKeys.home.organisation_settings.cta.save,
                            )}
                        </Button>
                    </HStack>
                </VStack>
            </HStack>
            <DeleteOrganisationModal isOpen={isOpen} onClose={onClose} />
        </VStack>
    );
};
export default OrganisationSettings;
