import { Image, VStack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Text from '../../../../text';
import FONTS from '../../../../../../constants/fonts';
import COLORS from '../../../../../../constants/colors';
import Button from '../../../../../inputs/button';
import Icon from '../../../../icon';
import { IMissingTermsProps } from './props';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../i18n/keys';

const MissingTerms = ({ addNewRowTerm }: IMissingTermsProps) => {
    // Attributes
    const { t } = useTranslation();

    // Render
    return (
        <VStack spacing='2rem' h='full' w='full' justifyContent={'center'}>
            <Image
                src='/assets/images/RetroMacError.png'
                alt='Retro Mac error'
            />
            <VStack spacing='0.375rem' w='25.75rem' textAlign={'center'}>
                <Text
                    font={FONTS.T1.T20px.SemiBold600.value}
                    color={COLORS.Text.T400.value}
                >
                    {t<string>(
                        tKeys.home.project.tab.glossary.content.missing.title,
                    )}
                </Text>
                <Text
                    font={FONTS.T1.T14px.Regular400.value}
                    color={COLORS.InputText.value}
                >
                    {t<string>(
                        tKeys.home.project.tab.glossary.content.missing
                            .description,
                    )}
                </Text>
            </VStack>
            <Button
                data-cy='addNewRowMissingTermButton'
                width={'8.75rem'}
                minW={'8.75rem'}
                height={'2.25rem'}
                padding={'0.25rem 0.75rem 0.25rem 0.5rem'}
                font={FONTS.T1.T12px.SemiBold600.value}
                spacing='0.25rem'
                color={COLORS.White.T500.value}
                backgroundColor={COLORS.Localize.Purple.T500.value}
                hoverBackgroundColor={COLORS.Localize.Purple.T600.value}
                startEnhancer={(): ReactElement => (
                    <Icon name='add' stroke={COLORS.White.T500.value} />
                )}
                onClick={() => {
                    addNewRowTerm({});
                }}
            >
                {t<string>(
                    tKeys.home.project.tab.glossary.content.missing.cta.add_key,
                )}
            </Button>
        </VStack>
    );
};

export default MissingTerms;
