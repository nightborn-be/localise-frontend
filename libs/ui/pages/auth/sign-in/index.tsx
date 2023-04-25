import React from 'react';
import COLORS from '../../../../../libs/ui/constants/colors';
import { VStack } from '@chakra-ui/react';
import FONTS from '../../../../../libs/ui/constants/fonts';
import Page from '../../../components/contents/page';
import Text from '../../../components/contents/text';
import Input from '../../../components/inputs/input';
import Button from '../../../components/inputs/button';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import { useSignInLogic } from './logic';
export default function SignInPage() {
    // Attributes
    const { t } = useTranslation();
    const { handleOnSubmit, form } = useSignInLogic();
    // Render
    return (
        <Page bgImage='/assets/images/AuthSignInBackground.png'>
            <VStack
                h='full'
                justifyContent={'center'}
                alignItems='left'
                spacing='2.5rem'
                w='20.4375rem'
                ml='8.5rem'
            >
                <Text
                    font={FONTS.T1.T24px.Bold700.value}
                    color={COLORS.Text.T400.value}
                >
                    {t<string>(tKeys.auth.sign_in.title)}
                </Text>
                <VStack spacing='1.25rem'>
                    <Input
                        {...form.email}
                        w='20.4375rem'
                        padding='0.75rem'
                        gap='0.5rem'
                        label={t<string>(tKeys.auth.sign_in.form.email.title)}
                        placeholder={t<string>(
                            tKeys.auth.sign_in.form.email.placeholder,
                        )}
                        placeholderColor={COLORS.InputText.value}
                        bg={COLORS.White.T500.value}
                        font={FONTS.T1.T12px.Regular400.value}
                        color={COLORS.Text.T400.value}
                        errorMsg={form.email.meta?.error}
                        isTouched={form.email.meta?.touched}
                        isValid={!form.email.meta?.error}
                    />
                    <Input
                        {...form.password}
                        w='20.4375rem'
                        padding='0.75rem'
                        gap='0.5rem'
                        type='password'
                        label={t<string>(
                            tKeys.auth.sign_in.form.password.title,
                        )}
                        placeholder={t<string>(
                            tKeys.auth.sign_in.form.password.placeholder,
                        )}
                        placeholderColor={COLORS.InputText.value}
                        bg={COLORS.White.T500.value}
                        font={FONTS.T1.T12px.Regular400.value}
                        color={COLORS.Text.T400.value}
                        errorMsg={form.password.meta?.error}
                        isTouched={form.password.meta?.touched}
                        isValid={!form.password.meta?.error}
                    />
                </VStack>
                <Button
                    color={COLORS.White.T500.value}
                    backgroundColor={COLORS.Localize.Purple.T500.value}
                    borderRadius='0.5rem'
                    hoverBackgroundColor={COLORS.Localize.Purple.T600.value}
                    onClick={handleOnSubmit}
                >
                    {t<string>(tKeys.auth.sign_in.cta.sign_in)}
                </Button>
            </VStack>
        </Page>
    );
}
