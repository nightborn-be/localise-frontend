import { HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
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
import InputSelectAndInput from '../../inputs/input-text-select';
import { EnhancerProps } from '../../inputs/button/props';
import Button from '../../inputs/button';
import Text from '../../contents/text';

export const CreateOrganisationModal = ({
    isOpen,
    onClose,
}: ICreateOrganisationProps) => {
    const {
        picturePath,
        onDrag,
        onDeletePicture,
        handleOnSubmit,
        resetForm,
        form,
    } = useCreateOrganisationLogic();

    const { t } = useTranslation();
    return (
        <Modal
            title={t<string>(tKeys.home.modal.create_organisation.title)}
            isOpen={isOpen}
            onClose={() => {
                onClose();
                resetForm();
            }}
            handleOnSubmit={handleOnSubmit}
        >
            <VStack spacing='0'>
                <VStack padding={'1.25rem 1.25rem 0.75rem'} spacing='0.625rem'>
                    <Input
                        w={'36.875rem'}
                        padding='0.625rem'
                        placeholder={t<string>(
                            tKeys.home.modal.create_organisation.from
                                .organisation_name.placeholder,
                        )}
                        label={t<string>(
                            tKeys.home.modal.create_organisation.from
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
                        label='Add a picutre'
                        description='The recommended size is 256x256px'
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
                                alt='Organization picture'
                            />
                        </HStack>
                    ) : (
                        <Dropzone
                            onDrag={onDrag}
                            label={t<string>(
                                tKeys.auth.sign_up.organisation.form.picture
                                    .label,
                            )}
                            h={'5rem'}
                            w={'5rem'}
                            font={FONTS.T1.T10px.Medium500.value}
                            iconHeight='20'
                            iconWidth='20'
                            spacing='0.1975rem'
                        />
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
                            label={'Invite your teammates'}
                            labelColor={COLORS.Text.T400.value}
                            labelFont={FONTS.T1.T14px.Medium500.value}
                        />
                        <Text
                            position={'absolute'}
                            right='0'
                            font={FONTS.T1.T12px.Medium500.value}
                            color={COLORS.InputText.value}
                        >
                            1/3
                        </Text>
                    </HStack>
                    <InputSelectAndInput
                        selectProps={{
                            color: COLORS.Localize.Purple.T500.value,
                            placeholderColor: COLORS.Localize.Purple.T500.value,
                            dropdownArrowColor:
                                COLORS.Localize.Purple.T500.value,
                            w: '6.25rem',
                            background: COLORS.White.T500.value,
                            border: 'transparent',
                            options: [
                                { value: 'Admin', label: 'Admin' },
                                { value: 'Member', label: 'Member' },
                                { value: 'Utilisateur', label: 'Utilisateur' },
                                {
                                    value: 'Administrateur',
                                    label: 'Administrateur',
                                },
                            ],
                            fontWeight: '400',
                            dropdownIndicator: (
                                <Icon name='dropdownIndicator' />
                            ),
                            fontSize: '0.75rem',
                            lineHeight: '0.9375rem',
                            padding: '0rem',
                            gap: '0.25rem',
                            placeholder: 'Admin',
                            paddingRight: '0',
                            paddingLeft: '0',
                            paddingContainer: '0.625rem',
                            font: FONTS.T1.T12px.Regular400.value,
                        }}
                        inputProps={{
                            name: 'name',
                            value: '',
                            onChange: () => {},
                            placeholder: 'Text',
                            w: '100%',
                            border: 'transparent',
                            font: FONTS.T1.T12px.Regular400.value,
                            zIndex: '10',
                        }}
                        w='full'
                        h='2.5rem'
                        border={`0.0625rem solid ${COLORS.Line.value}`}
                        borderRadius='0.5rem'
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
                        border={`1px dashed ${COLORS.Line.value}`}
                        borderRadius='0.5rem'
                        w='full'
                        h='2.5rem'
                        padding='0.25rem 0.75rem 0.25rem 0.5rem'
                        gap='0.25rem'
                        fontSize='0.75rem'
                        fontWeight={400}
                        lineHeight='0.9375rem'
                        justifyContent='flex-start'
                        backgroundColor='transparent'
                        color={COLORS.InputText.value}
                        hoverColor={COLORS.Localize.Purple.T500.value}
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
                    >
                        Add a member
                    </Button>
                </VStack>
            </VStack>
        </Modal>
    );
};

export default CreateOrganisationModal;
