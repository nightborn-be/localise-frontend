import { HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDeleteOrganisationLogic } from './logic';
import { IDeleteOrganisationProps } from './props';
import Modal from '../modal';
import { tKeys } from '../../../../i18n/keys';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Text from '../../contents/text';
import Icon from '../../contents/icon';

export const DeleteModal = ({
    isOpen,
    onClose,
    handleOnSubmit,
    titleModal,
    title,
    description,
    isLoading,
}: IDeleteOrganisationProps) => {
    // Attributes
    const { t } = useTranslation();

    // Render
    return (
        <HStack>
            <Modal
                title={titleModal}
                isOpen={isOpen}
                isLoading={isLoading}
                onClose={() => {
                    onClose();
                }}
                handleOnSubmit={handleOnSubmit}
                header={{
                    bg: COLORS.Disabled.value,
                    color: COLORS.Text.T400.value,
                    font: FONTS.T1.T16px.SemiBold600.value,
                    closeButtonBgColor: COLORS.Disabled.value,
                    closeButtonHoverBgColor: COLORS.Line.value,
                    closeButtonColor: COLORS.InputText.value,
                }}
                body={{ padding: '4rem 1.25rem 2rem 1.25rem' }}
                footer={{
                    bg: COLORS.Localize.Purple.T500.value,
                    color: COLORS.White.T500.value,
                    font: FONTS.T1.T16px.SemiBold600.value,
                    justifyContent: 'center',
                    padding: '0rem 1.25rem 4rem 1.25rem',
                    firstCtaLabel: t<string>(
                        tKeys.home.modal.delete_project.cta.cancel,
                    ),
                    firstCtaBgColor: 'transparent',
                    firstCtaBgHoverColor: COLORS.Localize.Purple.T500.value,
                    firstCtaColor: COLORS.InputText.value,
                    firstCtaFont: FONTS.T1.T12px.SemiBold600.value,
                    secondCtaLabel: t<string>(
                        tKeys.home.modal.delete_project.cta.delete,
                    ),
                    secondCtaBgColor: COLORS.Error.T500.value,
                    secondCtaColor: COLORS.White.T500.value,
                    secondCtaFont: FONTS.T1.T12px.SemiBold600.value,
                    secondCtaHeight: '2.25rem',
                    secondCtaWidth: '4.75rem',
                    secondCtaBgHoverColor: COLORS.HoverRed.value,
                    secondCtaStartEnhancer: (
                        <Icon
                            name='trashSmall'
                            fill={COLORS.White.T500.value}
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                        />
                    ),
                }}
            >
                <VStack alignItems={'center'} justifyContent={'center'}>
                    <Image
                        src='/assets/images/deleteModal.png'
                        alt='delete image picture'
                    />
                    <VStack
                        align={'center'}
                        textAlign={'center'}
                        alignItems={'center'}
                    >
                        <Text
                            color={COLORS.Text.T400.value}
                            font={FONTS.T1.T20px.SemiBold600.value}
                        >
                            {title}
                        </Text>
                        <Text
                            color={COLORS.InputText.value}
                            font={FONTS.T1.T14px.Regular400.value}
                        >
                            {description}
                        </Text>
                    </VStack>
                </VStack>
            </Modal>
        </HStack>
    );
};

export default DeleteModal;
