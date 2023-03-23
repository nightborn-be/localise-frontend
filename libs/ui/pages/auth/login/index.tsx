import React from 'react';
import COLORS from '../../../../../libs/ui/constants/colors';
import { VStack } from '@chakra-ui/react';
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
        spacing='40px'
        position='absolute'
        left='136px'
        top='221px'
        w='327px'
        h='305px'
      >
        <Text
          font={FONTS.T1.T24px.Bold700.value}
          color={COLORS.Text.T400.value}
        >
          Log in to Localize
        </Text>
        <VStack spacing='20px'>
          <Input
            {...form.email}
            w='327px'
            padding='12px'
            gap='8px'
            label='Email'
            placeholder='Insert email'
            placeholderColor={COLORS.InputText.value}
            bg={COLORS.White.T500.value}
            font={FONTS.T1.T14px.Regular400.value}
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
            font={FONTS.T1.T14px.Regular400.value}
            color={COLORS.Text.T400.value}
          />
        </VStack>
        <Button
          color={COLORS.White.T500.value}
          backgroundColor={COLORS.Localize.Purple.T500.value}
          border='1px solid transparent'
          borderRadius={'8px'}
          hoverBackgroundColor={COLORS.Localize.Purple.T600.value}
          onClick={handleOnSubmit}
        >
          Log in
        </Button>
      </VStack>
    </Page>
  );
}
