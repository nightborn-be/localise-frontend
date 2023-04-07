import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import InputLabel from '../../../../../components/inputs/input-label';
import { tKeys } from '../../../../../../i18n/keys';
import { useTranslation } from 'react-i18next';
import COLORS from '../../../../../constants/colors';
import FONTS from '../../../../../constants/fonts';
import Button from '../../../../../components/inputs/button';
import Icon from '../../../../../components/contents/icon';
import { IMembersSettingSectionProps } from './props';
import TableHeader from '../../../../../components/table/table-header';
import TableRow from '../../../../../components/table/table-row';

export const MembersSettingSection = ({
    membersRef,
    addMembersDisclosure,
    isLoading,
    handleOnSubmit,
}: IMembersSettingSectionProps) => {
    const { t } = useTranslation();
    return (
        <>
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
                            tKeys.home.organisation_settings.menu.form.members
                                .title,
                        )}
                        description={t<string>(
                            tKeys.home.organisation_settings.menu.form.members
                                .description,
                        )}
                        labelColor={COLORS.Text.T400.value}
                        labelFont={FONTS.T1.T16px.SemiBold600.value}
                        descriptionColor={COLORS.InputText.value}
                        descriptionFont={FONTS.T1.T12px.Regular400.value}
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
                                stroke={COLORS.Localize.Purple.T500.value}
                            />
                        )}
                        color={COLORS.Localize.Purple.T500.value}
                        hoverBackgroundColor={COLORS.Communication.BG.value}
                        onClick={addMembersDisclosure.onOpen}
                    >
                        {t<string>(
                            tKeys.home.organisation_settings.menu.form.members
                                .cta.add_member,
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
                    hoverBackgroundColor={COLORS.Localize.Purple.T600.value}
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.White.T500.value}
                    onClick={handleOnSubmit}
                >
                    {t<string>(tKeys.home.organisation_settings.cta.save)}
                </Button>
            </HStack>
        </>
    );
};

export default MembersSettingSection;
