import React from 'react';
import COLORS from '../../../../constants/colors';
import { VStack } from '@chakra-ui/react';
import FONTS from '../../../../constants/fonts';
import Text from '../../../../components/contents/text';
import Button from '../../../../components/inputs/button';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../i18n/keys';
import { IContentSignUpProps } from './props';
const ContentSignUp = ({
    w = '22.375rem',
    children,
    isLater = false,
    title,
    handleOnContinue,
    handleOnLater,
}: IContentSignUpProps) => {
    const { t } = useTranslation();
    // Render
    return (
        <VStack
            spacing='2.5rem'
            ml='8.5rem'
            w={w}
            alignItems={'left'}
            justifyContent={'left'}
        >
            <Text
                font={FONTS.T1.T28px.Bold700.value}
                color={COLORS.Text.T400.value}
            >
                {title}
            </Text>
            <VStack spacing='1.25rem' alignItems={'left'}>
                {children}
            </VStack>
            <VStack spacing='0.25rem' alignItems={'left'}>
                <Button
                    color={COLORS.White.T500.value}
                    backgroundColor={COLORS.Localize.Purple.T500.value}
                    border='0.0625rem solid transparent'
                    borderRadius={'0.5rem'}
                    w='20.4375rem'
                    h='2.75rem'
                    onClick={handleOnContinue}
                >
                    {t(tKeys.signup.buttonContinue) ?? ''}
                </Button>
                {isLater && (
                    <Button
                        color={COLORS.InputText.value}
                        backgroundColor={'transparent'}
                        border='0.0625rem solid transparent'
                        borderRadius={'0.5rem'}
                        w='20.4375rem'
                        onClick={handleOnLater}
                    >
                        {t(tKeys.signup.buttonLater) ?? ''}
                    </Button>
                )}
            </VStack>
        </VStack>
    );
};

export default ContentSignUp;
