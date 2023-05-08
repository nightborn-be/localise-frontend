import React from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import InputLabel from '../../../../../components/inputs/input-label';
import { tKeys } from '../../../../../../i18n/keys';
import { useTranslation } from 'react-i18next';
import COLORS from '../../../../../constants/colors';
import FONTS from '../../../../../constants/fonts';
import Button from '../../../../../components/inputs/button';
import Icon from '../../../../../components/contents/icon';
import { IMembersSettingSectionProps } from './props';
import TableMembers from './components/table-members';

export const MembersSettingSection = ({
    membersRef,
    addMembersDisclosure,
}: IMembersSettingSectionProps) => {
    // Attributes
    const { t } = useTranslation();

    // Render
    return (
        <Box
            // not developed for the moment, implement the logic when is developed. remplace this box per <></> when is implemented
            display='none'
        >
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
            <TableMembers />
        </Box>
    );
};

export default MembersSettingSection;
