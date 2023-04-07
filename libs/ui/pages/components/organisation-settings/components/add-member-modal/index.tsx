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

export const AddMembersModal = ({ isOpen, onClose }: IAddMembersProps) => {
    // Attributes
    const { handleOnSubmit, form } = useAddMembersLogic();
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
                    secondCtaWidth: '80px',
                    secondCtaHeight: '32px',
                }}
            >
                <VStack spacing='12px' padding='20px'>
                    <HStack
                        justifyContent='left'
                        alignItems={'center'}
                        w='full'
                        mb='4px'
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
                            2/6
                        </Text>
                    </HStack>
                    <InputSelectAndInput
                        selectProps={{
                            color: COLORS.Localize.Purple.T500.value,
                            placeholderColor: COLORS.Localize.Purple.T500.value,
                            dropdownArrowColor:
                                COLORS.Localize.Purple.T500.value,
                            w: '100px',
                            background: COLORS.White.T500.value,
                            border: 'transparent',
                            options: [
                                {
                                    value: t<string>(
                                        tKeys.home.organisation_settings.menu
                                            .modal.add_members.role.admin,
                                    ),
                                    label: t<string>(
                                        tKeys.home.organisation_settings.menu
                                            .modal.add_members.role.admin,
                                    ),
                                },
                                {
                                    value: t<string>(
                                        tKeys.home.organisation_settings.menu
                                            .modal.add_members.role.developer,
                                    ),
                                    label: t<string>(
                                        tKeys.home.organisation_settings.menu
                                            .modal.add_members.role.developer,
                                    ),
                                },
                                {
                                    value: t<string>(
                                        tKeys.home.organisation_settings.menu
                                            .modal.add_members.role.translator,
                                    ),
                                    label: t<string>(
                                        tKeys.home.organisation_settings.menu
                                            .modal.add_members.role.translator,
                                    ),
                                },
                            ],
                            fontWeight: '400',
                            dropdownIndicator: (
                                <Icon name='dropdownIndicator' />
                            ),
                            fontSize: '12px',
                            lineHeight: '15px',
                            padding: '0px',
                            gap: '4px',
                            placeholder: 'Admin',
                            paddingRight: '0',
                            paddingLeft: '0',
                            paddingContainer: '10px',
                            font: FONTS.T1.T12px.Regular400.value,
                        }}
                        inputProps={{
                            name: 'name',
                            value: null,
                            onChange: () => {},
                            placeholder: t<string>(
                                tKeys.home.organisation_settings.menu.modal
                                    .add_members.form.teammates.placeholder,
                            ),
                            w: '100%',
                            border: 'transparent',
                            font: FONTS.T1.T12px.Regular400.value,
                            zIndex: '10',
                        }}
                        w='full'
                        h='40px'
                        border={`1px solid ${COLORS.Line.value}`}
                        borderRadius='8px'
                        onDelete={() => {}}
                        rightIcon={
                            <Icon
                                pointerEvents={'none'}
                                name='removeSmall'
                                stroke={COLORS.InputText.value}
                            />
                        }
                        rightHoverIcon={
                            <Icon
                                pointerEvents={'none'}
                                name='removeSmall'
                                stroke={COLORS.Error.T500.value}
                            />
                        }
                    />

                    <Button
                        font={FONTS.T1.T14px.Regular400.value}
                        border={`0.0625rem dashed ${COLORS.Line.value}`}
                        borderRadius='0.5rem'
                        w='full'
                        h='40px'
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
                    >
                        {t<string>(
                            tKeys.home.organisation_settings.menu.modal
                                .add_members.cta.add,
                        )}
                    </Button>
                </VStack>
            </Modal>
        </HStack>
    );
};

export default AddMembersModal;
