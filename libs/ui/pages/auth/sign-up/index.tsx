import React from 'react';
import COLORS from '../../../../../libs/ui/constants/colors';
import FONTS from '../../../../../libs/ui/constants/fonts';
import Page from '../../../components/contents/page';
import Input from '../../../components/inputs/input';
import ContentSignUp from './component/content-signup';
import { useSignUpLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';

const SignUpPage = () => {
    // Attributes
    const { t } = useTranslation();
    const { handleOnSubmit, form } = useSignUpLogic();

    // Render
    return (
        <Page bgImage='/assets/images/AuthSignInBackground.png'>
            <ContentSignUp
                title={t<string>(tKeys.signup.account.title)}
                handleOnContinue={handleOnSubmit}
            >
                <Input
                    {...form.email}
                    w='20.4375rem'
                    padding='0.75rem'
                    gap='0.5rem'
                    label={t(tKeys.login.inputLabel.email)}
                    placeholder={t(tKeys.login.inputPlaceholder.email)}
                    placeholderColor={COLORS.InputText.value}
                    bg={COLORS.White.T500.value}
                    font={FONTS.T1.T12px.Regular400.value}
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
                    font={FONTS.T1.T12px.Regular400.value}
                    color={COLORS.Text.T400.value}
                    errorMsg={form.password.meta?.error}
                    isTouched={form.password.meta?.touched}
                    isValid={form.password.meta?.error === undefined}
                />
            </ContentSignUp>
        </Page>
    );
};

export default SignUpPage;
