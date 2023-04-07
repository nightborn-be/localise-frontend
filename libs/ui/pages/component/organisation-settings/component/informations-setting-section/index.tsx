import React from 'react';
import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import InputLabel from '../../../../../components/inputs/input-label';
import { tKeys } from '../../../../../../i18n/keys';
import { useTranslation } from 'react-i18next';
import COLORS from '../../../../../constants/colors';
import FONTS from '../../../../../constants/fonts';
import Input from '../../../../../components/inputs/input';
import Button from '../../../../../components/inputs/button';
import { EnhancerProps } from '../../../../../components/inputs/button/props';
import Icon from '../../../../../components/contents/icon';
import Text from '../../../../../components/contents/text';
import Dropzone from '../../../../auth/sign-up/organisation/picture/component/dropzone';
import ButtonIcon from '../../../../../components/inputs/button-icon';
import { ButtonSize } from '../../../../../components/inputs/button-icon/types';
import { IInformationSettingSectionProps } from './props';
import { getInitialeName } from '../../../../../../utils/functions';

export const InformationSettingSection = ({
    informationsRef,
    form,
    organisationName,
    deleteOrganisationDisclosure,
    pictureUrl,
    setOrganisationPicture,
}: IInformationSettingSectionProps) => {
    const { t } = useTranslation();
    return (
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
                ref={informationsRef}
            >
                <InputLabel
                    label={t<string>(
                        tKeys.home.organisation_settings.menu.form.informations
                            .title,
                    )}
                    description={t<string>(
                        tKeys.home.organisation_settings.menu.form.informations
                            .description,
                    )}
                    labelColor={COLORS.Text.T400.value}
                    labelFont={FONTS.T1.T16px.SemiBold600.value}
                    descriptionColor={COLORS.InputText.value}
                    descriptionFont={FONTS.T1.T12px.Regular400.value}
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
                    onClick={deleteOrganisationDisclosure.onOpen}
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
                        tKeys.home.organisation_settings.menu.form.informations
                            .cta.delete,
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
                        {getInitialeName(organisationName)}
                    </Text>
                )}
                <Box position={'absolute'} top='5.3125rem' bottom='0' right='0'>
                    <Dropzone onDrag={setOrganisationPicture}>
                        <ButtonIcon
                            size={ButtonSize.SMALL}
                            border={`0.25rem solid ${COLORS.White.T500.value}`}
                            borderRadius='3.75rem'
                            bg={COLORS.Line.value}
                        >
                            <Icon name='edit' width='12' height='12' />
                        </ButtonIcon>
                    </Dropzone>
                </Box>
            </HStack>
        </HStack>
    );
};

export default InformationSettingSection;
