import { HStack, Image, VStack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Input from '../../inputs/input/index';
import { useCreateOrganisationLogic } from './logic';
import Modal from '../../surface/modal';
import { ICreateOrganisationProps } from './props';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import InputLabel from '../../inputs/input-label';
import Dropzone from '../../../pages/auth/sign-up/organisation/picture/component/dropzone';
import ButtonIcon from '../../inputs/button-icon';
import { ButtonSize } from '../../inputs/button-icon/types';
import Icon from '../../contents/icon';
import { EnhancerProps } from '../../inputs/button/props';
import Button from '../../inputs/button';
import Text from '../../contents/text';
import MemberRow from '../../../pages/auth/sign-up/organisation/add-members/components/member-row';
import { IMembersType } from '../../../pages/auth/sign-up/organisation/add-members/types';

export const CreateOrganisationModal = ({
    isOpen,
    onClose,
    handleOnSubmit,
}: ICreateOrganisationProps) => {
    const {
        picturePath,
        onDrag,
        onDeletePicture,
        resetForm,
        updateMemberData,
        removeMember,
        addEmptyMember,
        form,
    } = useCreateOrganisationLogic();

    const { t } = useTranslation();
    // Render
    return (
        <Modal
            title={t<string>(tKeys.home.modal.create_organisation.title)}
            isOpen={isOpen}
            onClose={() => {
                onClose();
                resetForm();
            }}
            handleOnSubmit={() => {
                handleOnSubmit(form, resetForm);
            }}
            isDisabled={form.organisationName.value == ''}
        >
            <VStack spacing='0'>
                <VStack padding={'1.25rem 1.25rem 0.75rem'} spacing='0.625rem'>
                    <Input
                        w={'36.875rem'}
                        padding='0.625rem'
                        placeholder={t<string>(
                            tKeys.home.modal.create_organisation.form
                                .organisation_name.placeholder,
                        )}
                        label={t<string>(
                            tKeys.home.modal.create_organisation.form
                                .organisation_name.title,
                        )}
                        font={FONTS.T1.T12px.Regular400.value}
                        labelColor={COLORS.Text.T500.value}
                        labelFont={FONTS.T1.T14px.Medium500.value}
                        {...form.organisationName}
                    />
                </VStack>
                <VStack
                    padding={'0.75rem 1.25rem'}
                    spacing='1.25rem'
                    alignItems={'left'}
                    w={'full'}
                >
                    <InputLabel
                        label={t<string>(
                            tKeys.home.modal.create_organisation.form
                                .organisation_picture.title,
                        )}
                        description={t<string>(
                            tKeys.home.modal.create_organisation.form
                                .organisation_picture.description,
                        )}
                        labelColor={COLORS.Text.T400.value}
                        labelFont={FONTS.T1.T14px.Medium500.value}
                    />
                    {picturePath ? (
                        <HStack
                            w='5rem'
                            h='5rem'
                            maxH='5rem'
                            maxW='5rem'
                            position={'relative'}
                            spacing='0'
                        >
                            <ButtonIcon
                                position={'absolute'}
                                top='-0.4375rem'
                                right='-1.0625rem'
                                aria-label='remove'
                                borderRadius='100%'
                                size={ButtonSize.XS}
                                backgroundColor={COLORS.White.T500.value}
                                hoverBackgroundColor={COLORS.Tag.value}
                                handleOnClick={onDeletePicture}
                            >
                                <Icon
                                    name='removeSmall'
                                    stroke={COLORS.Error.T500.value}
                                    width={20}
                                    height={20}
                                />
                            </ButtonIcon>
                            <Image
                                borderRadius='1rem'
                                w='5rem'
                                h='5rem'
                                minH='5rem'
                                minW='5rem'
                                color={COLORS.InputText.value}
                                whiteSpace='pre-line'
                                src={picturePath}
                                alt={t<string>(
                                    tKeys.home.modal.create_organisation.form
                                        .organisation_picture.alt,
                                )}
                            />
                        </HStack>
                    ) : (
                        <Dropzone onDrag={onDrag}>
                            <Button
                                border={`0.125rem dashed ${COLORS.InputText.value}`}
                                font={FONTS.T1.T10px.Medium500.value}
                                borderRadius='1rem'
                                w={'5rem'}
                                h={'5rem'}
                                maxH={'5rem'}
                                maxW={'5rem'}
                                direction='column'
                                backgroundColor='transparent'
                                color={COLORS.InputText.value}
                                whiteSpace='pre-line'
                                spacing={'0.1975rem'}
                                startEnhancer={(): ReactElement => (
                                    <Icon
                                        name='uploadCloud'
                                        stroke={COLORS.InputText.value}
                                        width={'20'}
                                        height={'20'}
                                    />
                                )}
                            >
                                {t<string>(
                                    tKeys.auth.sign_up.organisation.form.picture
                                        .label,
                                )}
                            </Button>
                        </Dropzone>
                    )}
                </VStack>
                <VStack
                    w={'full'}
                    alignItems={'left'}
                    padding='0.75rem 1.25rem'
                    spacing='1rem'
                >
                    <HStack w={'full'} padding='0px' position={'relative'}>
                        <InputLabel
                            label={t<string>(
                                tKeys.home.modal.create_organisation.form
                                    .organisation_teammates.title,
                            )}
                            labelColor={COLORS.Text.T400.value}
                            labelFont={FONTS.T1.T14px.Medium500.value}
                        />
                        <Text
                            position={'absolute'}
                            right='0'
                            font={FONTS.T1.T12px.Medium500.value}
                            color={COLORS.InputText.value}
                        >
                            {form.members.value.length}/3
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
                    {form.members.value.length < 3 && (
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
                            ): ReactElement => (
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
                                tKeys.home.modal.create_organisation.form
                                    .organisation_teammates.cta.add,
                            )}
                        </Button>
                    )}
                </VStack>
            </VStack>
        </Modal>
    );
};

export default CreateOrganisationModal;
