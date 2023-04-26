import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import COLORS from '../../../../../constants/colors';
import FONTS from '../../../../../constants/fonts';
import { useAddMembersLogic } from './logic';
import { IAddMembersProps } from './props';
import { useTranslation } from 'react-i18next';
import Modal from '../../../../../components/surface/modal';
import Text from '../../../../../components/contents/text';
import InputSelectAndInput from '../../../../../components/inputs/input-text-select/index';
import Icon from '../../../../../components/contents/icon';
import Button from '../../../../../components/inputs/button';
import { EnhancerProps } from '../../../../../components/inputs/button/props';
import { tKeys } from '../../../../../../i18n/keys';
import MemberRow from '../../../../../pages/auth/sign-up/organisation/add-members/components/member-row';
import { IMembersType } from '../../../../../pages/auth/sign-up/organisation/add-members/types';

export const AddMembersModal = ({ isOpen, onClose }: IAddMembersProps) => {
    // Attributes
    const {
        handleOnSubmit,
        updateMemberData,
        removeMember,
        addEmptyMember,
        form,
    } = useAddMembersLogic();
    const { t } = useTranslation();

    // Render
    return (
        <HStack>
            <Modal
                title={t<string>(
                    tKeys.home.organisation_settings.menu.modal.add_members
                        .title,
                )}
                isOpen={isOpen}
                onClose={() => {
                    onClose();
                }}
                handleOnSubmit={handleOnSubmit}
                footer={{
                    firstCtaLabel: t<string>(
                        tKeys.home.organisation_settings.menu.modal.add_members
                            .cta.cancel,
                    ),
                    firstCtaBgColor: 'transparent',
                    firstCtaBgHoverColor: COLORS.Localize.Purple.T500.value,
                    firstCtaColor: COLORS.InputText.value,
                    firstCtaFont: FONTS.T1.T12px.SemiBold600.value,
                    secondCtaLabel: t<string>(
                        tKeys.home.organisation_settings.menu.modal.add_members
                            .cta.Invite,
                    ),
                    secondCtaBgColor: COLORS.Tag.value,
                    secondCtaFont: FONTS.T1.T12px.SemiBold600.value,
                    secondCtaColor: COLORS.InputText.value,
                    secondCtaWidth: '5rem',
                    secondCtaHeight: '2rem',
                }}
            >
                <VStack spacing='0.75rem' padding='1.25rem'>
                    <HStack
                        justifyContent='left'
                        alignItems={'center'}
                        w='full'
                        mb='0.25rem'
                    >
                        <Text
                            color={COLORS.Text.T500.value}
                            font={FONTS.T1.T14px.Medium500.value}
                            w='full'
                        >
                            {t<string>(
                                tKeys.home.organisation_settings.menu.modal
                                    .add_members.form.teammates.title,
                            )}
                        </Text>
                        <Text
                            color={COLORS.InputText.value}
                            font={FONTS.T1.T12px.Medium500.value}
                        >
                            {form.members.value.length}/6
                        </Text>
                    </HStack>
                    {form.members.value.map(
                        (obj: IMembersType, index: number) => {
                            return (
                                <MemberRow
                                    key={`members_id_${obj.customId}`}
                                    onChange={(email, role) => {
                                        updateMemberData(
                                            obj.customId,
                                            email,
                                            role,
                                        );
                                    }}
                                    onDelete={() => {
                                        removeMember(obj.customId);
                                    }}
                                    index={index}
                                />
                            );
                        },
                    )}
                    {form.members.value.length < 6 && (
                        <Button
                            font={FONTS.T1.T14px.Regular400.value}
                            border={`0.0625rem dashed ${COLORS.Line.value}`}
                            borderRadius='0.5rem'
                            w='full'
                            h='2.5rem'
                            padding='0.25rem 0.75rem 0.25rem 0.5rem'
                            gap='0.25rem'
                            justifyContent='flex-start'
                            backgroundColor='transparent'
                            color={COLORS.InputText.value}
                            startEnhancer={(
                                enhancer: EnhancerProps,
                            ): React.ReactElement => (
                                <Icon
                                    name='add'
                                    stroke={
                                        enhancer.isHovered
                                            ? COLORS.Localize.Purple.T500.value
                                            : COLORS.InputText.value
                                    }
                                    width='20'
                                    height='20'
                                />
                            )}
                            hoverColor={COLORS.Localize.Purple.T500.value}
                            onClick={addEmptyMember}
                        >
                            {t<string>(
                                tKeys.home.organisation_settings.menu.modal
                                    .add_members.cta.add,
                            )}
                        </Button>
                    )}
                </VStack>
            </Modal>
        </HStack>
    );
};

export default AddMembersModal;
