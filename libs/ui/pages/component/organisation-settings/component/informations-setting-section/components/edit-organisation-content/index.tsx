import { VStack } from '@chakra-ui/react';
import { IEditOrganisationContentProps } from './props';
import InputLabel from '../../../../../../../components/inputs/input-label';
import Input from '../../../../../../../components/inputs/input';
import { tKeys } from '../../../../../../../../i18n/keys';
import COLORS from '../../../../../../../constants/colors';
import FONTS from '../../../../../../../constants/fonts';
import { EnhancerProps } from '../../../../../../../components/inputs/button/props';
import Icon from '../../../../../../../components/contents/icon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../../../../../components/inputs/button';

const EditOrganisationContent = ({
    informationsRef,
    form,
    deleteOrganisationDisclosure,
}: IEditOrganisationContentProps) => {
    const { t } = useTranslation();
    return (
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
                    tKeys.home.organisation_settings.menu.form.informations.cta
                        .delete,
                )}
            </Button>
        </VStack>
    );
};

export default EditOrganisationContent;
