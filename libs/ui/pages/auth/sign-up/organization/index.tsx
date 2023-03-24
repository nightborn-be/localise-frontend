import React from 'react';
import COLORS from '../../../../constants/colors';
import FONTS from '../../../../constants/fonts';
import Page from '../../../../components/contents/page';
import Input from '../../../../components/inputs/input';
import ContentSignUp from '../component/content-signup';
import { useOrganizationLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../i18n/keys';
export default function OrganizationPage() {
    // Attributes
    const { handleOnSubmit, form } = useOrganizationLogic();
    const { t } = useTranslation();
    // Render
    return (
        <Page bgImage='/assets/images/LoginBackground.jpg'>
            <ContentSignUp
                title={t(tKeys.signup.organizationName.title) ?? ''}
                handleOnContinue={handleOnSubmit}
            >
                <Input
                    {...form.organizationName}
                    w='20.4375rem'
                    padding='0.75rem'
                    gap='0.5rem'
                    label={t(tKeys.signup.organizationName.inputLabel)}
                    placeholder={t(
                        tKeys.signup.organizationName.inputPlaceholder,
                    )}
                    placeholderColor={COLORS.InputText.value}
                    bg={COLORS.White.T500.value}
                    font={FONTS.T1.T12px.Regular400.value}
                    color={COLORS.Text.T400.value}
                    errorMsg={form.organizationName.meta?.error}
                    isTouched={form.organizationName.meta?.touched}
                    isValid={form.organizationName.meta?.error === undefined}
                />
            </ContentSignUp>
        </Page>
    );
}
