import React from 'react';
import Page from '../../components/contents/page';
import Text from '../../components/contents/text';
import COLORS from '../../constants/colors';
import FONTS from '../../constants/fonts';
import Button from '../../components/inputs/button';
import { HStack, Image, VStack } from '@chakra-ui/react';
import { useAuthLogic } from './logic';

export default function HomePage() {
  // Attributes
  const { handleLogInRedirecton, handleSignInRedirection } = useAuthLogic();

  // Render
  return (
    <Page bgImage='./assets/images/DefaultHomeBackground.png'>
      <VStack spacing='20px' padding='0' alignItems={'left'} ml='12.5rem'>
        <VStack spacing={'0'} alignItems='left'>
          <Text
            font={FONTS.T1.T28px.SemiBold600.value}
            color={COLORS.Text.T400.value}
            my='0'
          >
            Welcome on
          </Text>
          <VStack spacing='12px' alignItems={'left'}>
            <HStack spacing={0}>
              {/* Change the font size to 64px when Thomas regenerate the value */}
              <Text
                font={FONTS.T1.T60px.Bold700.value}
                color={COLORS.Text.T400.value}
                my='0'
              >
                LOCALIZE
              </Text>
              <Image
                w={'60px'}
                h={'60px'}
                src='./assets/images/handHome.png'
                alt='Hand emoji'
              />
            </HStack>
            <HStack spacing='6px'>
              <Text
                font={FONTS.T1.T16px.Light300.value}
                color={COLORS.Text.T400.value}
                my='0'
              >
                An amazing tool made by
              </Text>
              <Image
                w={'24px'}
                h={'24px'}
                src='./assets/images/nightborn.jpg'
                alt='Nightborn logo'
              />
            </HStack>
          </VStack>
        </VStack>
        <VStack spacing='12px' alignItems={'left'}>
          <Button
            color={COLORS.White.T500.value}
            backgroundColor={COLORS.Localize.Purple.T500.value}
            w={'275px'}
            h={'44px'}
            border='1px solid transparent'
            borderRadius={'8px'}
            hoverBackgroundColor={COLORS.Localize.Purple.T600.value}
            onClick={handleLogInRedirecton}
          >
            Log in
          </Button>
          <Button
            color={COLORS.Localize.Purple.T500.value}
            backgroundColor={COLORS.White.T500.value}
            border={`1px solid ${COLORS.Localize.Purple.T500.value}`}
            w={'275px'}
            h={'44px'}
            borderRadius={'8px'}
            onClick={handleSignInRedirection}
          >
            Sign up
          </Button>
        </VStack>
      </VStack>
    </Page>
  );
}
