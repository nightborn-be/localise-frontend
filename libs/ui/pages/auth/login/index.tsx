import React from 'react';
import COLORS from '../../../../../libs/ui/constants/colors';
import { Box, HStack, VStack } from '@chakra-ui/react';
import FONTS from '../../../../../libs/ui/constants/fonts';
import Page from '../../../components/contents/page';
import Text from '../../../components/contents/text';
import Input from '../../../components/inputs/input';
import Button from '../../../components/inputs/button';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import { useLoginLogic } from './logic';
export default function LoginPage() {
    // Attributes
    const { handleOnSubmit, form } = useLoginLogic();
    const { t } = useTranslation();
    // Render
    return (
        <Page bgImage='/assets/images/LoginBackground.jpg'>
            <VStack
                alignItems='left'
                spacing='2.5rem'
                w='20.4375rem'
                ml='8.5rem'
            >
                <Text
                    font={FONTS.T1.T24px.Bold700.value}
                    color={COLORS.Text.T400.value}
                >
                    {t(tKeys.login.title)}
                </Text>
                <VStack spacing='1.25rem'>
                    <Input
                        {...form.email}
                        w='20.4375rem'
                        padding='0.75rem'
                        gap='0.5rem'
                        label={t(tKeys.login.inputLabel.email)}
                        placeholder={t(tKeys.login.inputPlaceholder.email)}
                        placeholderColor={COLORS.InputText.value}
                        bg={COLORS.White.T500.value}
                        font={FONTS.T1.T14px.Regular400.value}
                        color={COLORS.Text.T400.value}
                        errorMsg={form.email.meta?.error}
                        isTouched={form.email.meta?.touched}
                        isValid={form.email.meta?.error === undefined}
                    />
                    <Input
                        {...form.password}
                        w='20.4375rem'
                        padding='0.75rem'
                        gap='0.5rem'
                        type='password'
                        label={t(tKeys.login.inputLabel.password)}
                        placeholder={t(tKeys.login.inputPlaceholder.password)}
                        placeholderColor={COLORS.InputText.value}
                        bg={COLORS.White.T500.value}
                        font={FONTS.T1.T14px.Regular400.value}
                        color={COLORS.Text.T400.value}
                        errorMsg={form.password.meta?.error}
                        isTouched={form.password.meta?.touched}
                        isValid={form.password.meta?.error === undefined}
                    />
                </VStack>
                <Button
                    color={COLORS.White.T500.value}
                    backgroundColor={COLORS.Localize.Purple.T500.value}
                    border='0.0625rem solid transparent'
                    borderRadius={'0.5rem'}
                    hoverBackgroundColor={COLORS.Localize.Purple.T600.value}
                    onClick={handleOnSubmit}
                >
                    {t(tKeys.common.buttonLogin) ?? ''}
                </Button>
            </VStack>
        </Page>
    );
}
