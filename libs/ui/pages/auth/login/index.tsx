import React from 'react';
import COLORS from '../../../../../libs/ui/constants/colors';
import { Box, HStack, VStack } from '@chakra-ui/react';
import FONTS from '../../../../../libs/ui/constants/fonts';
import Page from '../../../components/contents/page';
import Text from '../../../components/contents/text';
import Input from '../../../components/inputs/input';
import Button from '../../../components/inputs/button';
import { useLoginLogic } from './logic';
export default function LoginPage() {
    // Attributes
    const { handleOnSubmit, form } = useLoginLogic();
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
                    Log in to Localize
                </Text>
                <VStack spacing='1.25rem'>
                    <Input
                        {...form.email}
                        w='20.4375rem'
                        padding='0.75rem'
                        gap='0.5rem'
                        label='Email'
                        placeholder='Insert email'
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
                        label='Password'
                        placeholder='Insert password'
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
                    Log in
                </Button>
            </VStack>
        </Page>
    );
}
