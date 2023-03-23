import React from 'react';
import COLORS from '../../../../../libs/ui/constants/colors';
import FONTS from '../../../../../libs/ui/constants/fonts';
import Page from '../../../components/contents/page';
import Input from '../../../components/inputs/input';
import ContentSignIn from './component/content-signup';
import { useSignInLogic } from './logic';
export default function SignInPage() {
  // Attributes
  const { handleOnSubmit, form } = useSignInLogic();

  // Render
  return (
    <Page bgImage='/assets/images/LoginBackground.jpg'>
      <ContentSignIn
        title='Tell us more about yourself'
        handleOnContinue={handleOnSubmit}
      >
        <Input
          {...form.email}
          w='327px'
          padding='12px'
          gap='8px'
          label='Email'
          placeholder='Insert email'
          placeholderColor={COLORS.InputText.value}
          bg={COLORS.White.T500.value}
          font={FONTS.T1.T12px.Regular400.value}
          color={COLORS.Text.T400.value}
        />
        <Input
          {...form.password}
          w='327px'
          padding='12px'
          gap='8px'
          type='password'
          label='Password'
          placeholder='Insert password'
          placeholderColor={COLORS.InputText.value}
          bg={COLORS.White.T500.value}
          font={FONTS.T1.T12px.Regular400.value}
          color={COLORS.Text.T400.value}
        />
      </ContentSignIn>
    </Page>
  );
}
