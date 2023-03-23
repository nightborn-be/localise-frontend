import React from 'react';
import COLORS from '../../../../constants/colors';
import FONTS from '../../../../constants/fonts';
import Page from '../../../../components/contents/page';
import Input from '../../../../components/inputs/input';
import ContentSignIn from '../component/content-signup';
import { useOrganizationLogic } from './logic';
export default function OrganizationPage() {
  // Attributes
  const { handleOnSubmit, form } = useOrganizationLogic();
  // Render
  return (
    <Page bgImage='/assets/images/LoginBackground.jpg'>
      <ContentSignIn
        title='What is your organization name?'
        handleOnContinue={handleOnSubmit}
      >
        <Input
          {...form.organizationName}
          w='327px'
          padding='12px'
          gap='8px'
          label='Your workspace name'
          placeholder='Insert name'
          placeholderColor={COLORS.InputText.value}
          bg={COLORS.White.T500.value}
          font={FONTS.T1.T12px.Regular400.value}
          color={COLORS.Text.T400.value}
        />
      </ContentSignIn>
    </Page>
  );
}
