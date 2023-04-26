import { Image, VStack } from '@chakra-ui/react';
import React from 'react';
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
        <VStack spacing='32px' h='full' w='full' justifyContent={'center'}>
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
                width={'140px'}
                minW={'140px'}
                height={'36px'}
                padding={'4px 12px 4px 8px'}
                font={FONTS.T1.T12px.SemiBold600.value}
                spacing='4px'
                color={COLORS.White.T500.value}
                backgroundColor={COLORS.Localize.Purple.T500.value}
                hoverBackgroundColor={COLORS.Localize.Purple.T600.value}
                startEnhancer={(): React.ReactElement => (
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
