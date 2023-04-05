import React, { useState } from 'react';
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

const OrganisationSettings = () => {
    const [activeKey, setActiveKey] = useState(MenuItemValue.INFORMATIONS);

    const { form } = useOrganisationSettingsLogic();
    return (
        <VStack h='full' w='full' alignItems={'left'} padding='0px'>
            <Breadcrumb elements={[{ label: 'Organisation settings' }]} />
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
                                title: 'Information',
                                value: MenuItemValue.INFORMATIONS,
                            },
                            {
                                title: 'Members',
                                value: MenuItemValue.MEMBERS,
                            },
                        ]}
                        value={activeKey}
                        onChange={(value) => setActiveKey(value)}
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
                        >
                            <InputLabel
                                label='Informations'
                                description='Lorem ipsum dolor sit amet consectetur. Velit habitant eros nisl at risus mollis in sagittis et. Sed venenatis aenean scelerisque aliquet justo amet vestibulum.'
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
                                Do you want to delete this organisation ?
                            </Button>
                        </VStack>
                        <Box
                            position={'relative'}
                            minW={'120px'}
                            width='120px'
                            height={'fit-content'}
                        >
                            <Image
                                src={'/assets/images/nightborn.png'}
                                alt=''
                                width='120px'
                                height={'120px'}
                                borderRadius='100px'
                            />
                            <ButtonIcon
                                position={'absolute'}
                                top='85px'
                                bottom='0'
                                right='0'
                                size={ButtonSize.SMALL}
                                border={`4px solid ${COLORS.White.T500.value}`}
                                borderRadius='60px'
                                bg={COLORS.Line.value}
                            >
                                <Icon name='edit' width='12' height='12' />
                            </ButtonIcon>
                        </Box>
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
                    >
                        <InputLabel
                            label='Members'
                            description='Lorem ipsum dolor sit amet consectetur. Velit habitant eros nisl at risus mollis in sagittis et. Sed venenatis aenean scelerisque aliquet justo amet vestibulum.'
                            labelColor={COLORS.Text.T400.value}
                            labelFont={FONTS.T1.T16px.SemiBold600.value}
                            descriptionColor={COLORS.InputText.value}
                            descriptionFont={FONTS.T1.T12px.Regular400.value}
                            spacing='0.5rem'
                        />
                        <Button
                            position={'absolute'}
                            right='32px'
                            top='0px'
                            font={FONTS.T1.T12px.SemiBold600.value}
                            w={'fit-content'}
                            h={'fit-content'}
                            padding='0.375rem 0.5rem'
                            gap='0.25rem'
                            spacing='0.25rem'
                            border={`none`}
                            borderRadius='0.5rem'
                            backgroundColor={'transparent'}
                            startEnhancer={(
                                enhancer: EnhancerProps,
                            ): React.ReactElement => (
                                <Icon
                                    name='addLarge'
                                    stroke={COLORS.Localize.Purple.T500.value}
                                />
                            )}
                            color={COLORS.Localize.Purple.T500.value}
                            hoverBackgroundColor={COLORS.Communication.BG.value}
                        >
                            Add members
                        </Button>
                    </VStack>
                    <VStack alignItems={'left'} w='full'>
                        <TableHeader />
                        <TableRow
                            avatarPicture='/assets/images/avatar.png'
                            firstName='Pierre'
                            lastName='De Moor'
                        />
                    </VStack>
                </VStack>
            </HStack>
        </VStack>
    );
};
export default OrganisationSettings;
