import React from 'react';
import COLORS from '../../../../constants/colors';
import { VStack } from '@chakra-ui/react';
import FONTS from '../../../../constants/fonts';
import Text from '../../../../components/contents/text';
import Button from '../../../../components/inputs/button';
import { IContentSignInProps } from './props';

const ContentSignIn = ({
  w = '358px',
  children,
  isLater = false,
  title,
  handleOnContinue,
  handleOnLater,
}: IContentSignInProps) => {
  // Render
  return (
    <VStack
      spacing='40px'
      ml='136px'
      w={w}
      alignItems={'left'}
      justifyContent={'left'}
    >
      <Text font={FONTS.T1.T28px.Bold700.value} color={COLORS.Text.T400.value}>
        {title}
      </Text>
      <VStack spacing='20px' alignItems={'left'}>
        {children}
      </VStack>
      <VStack spacing='4px' alignItems={'left'}>
        <Button
          color={COLORS.White.T500.value}
          backgroundColor={COLORS.Localize.Purple.T500.value}
          border='1px solid transparent'
          borderRadius={'8px'}
          w='327px'
          h='44px'
          onClick={handleOnContinue}
        >
          Continue
        </Button>
        {isLater && (
          <Button
            color={COLORS.InputText.value}
            backgroundColor={'transparent'}
            border='1px solid transparent'
            borderRadius={'8px'}
            w='327px'
            onClick={handleOnLater}
          >
            Later
          </Button>
        )}
      </VStack>
    </VStack>
  );
};

export default ContentSignIn;
