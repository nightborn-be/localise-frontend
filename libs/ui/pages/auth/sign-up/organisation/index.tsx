import React from 'react';
import COLORS from '../../../../constants/colors';
import FONTS from '../../../../constants/fonts';
import Page from '../../../../components/contents/page';
import Input from '../../../../components/inputs/input';
import ContentSignUp from '../component/content-signup';
import { useOrganisationLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../i18n/keys';
import { Box } from '@chakra-ui/react';

const OrganisationPage = () => {
    // Attributes
    const { handleOnSubmit, form } = useOrganisationLogic();
    const { t } = useTranslation();

    // Render
    return (
        <Page
            bgImage='/assets/images/AuthSignInBackground.png'
            displaySidebar={false}
        >
            <Box ml='8.5rem'>
                <ContentSignUp
                    title={t<string>(
                        tKeys.auth.sign_up.organisation.name.title,
                    )}
                    handleOnContinue={handleOnSubmit}
                >
                    <Input
                        {...form.organizationName}
                        w='20.4375rem'
                        padding='0.75rem'
                        gap='0.5rem'
                        label={t<string>(
                            tKeys.auth.sign_up.organisation.form.name.label,
                        )}
                        placeholder={t<string>(
                            tKeys.auth.sign_up.organisation.form.name
                                .placeholder,
                        )}
                        placeholderColor={COLORS.InputText.value}
                        bg={COLORS.White.T500.value}
                        font={FONTS.T1.T12px.Regular400.value}
                        color={COLORS.Text.T400.value}
                        errorMsg={form.organizationName.meta?.error}
                        isTouched={form.organizationName.meta?.touched}
                        isValid={
                            form.organizationName.meta?.error === undefined
                        }
                    />
                </ContentSignUp>
            </Box>
        </Page>
    );
};

export default OrganisationPage;
