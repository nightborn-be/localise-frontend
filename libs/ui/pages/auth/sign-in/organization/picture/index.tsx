import React, { useState } from 'react';
import COLORS from '../../../../../constants/colors';
import { HStack, Image } from '@chakra-ui/react';
import Page from '../../../../../components/contents/page';
import Icon from '../../../../../components/contents/icon';
import ButtonIcon from '../../../../../components/inputs/button-icon';
import { ButtonSize } from '../../../../../components/inputs/button-icon/types';
import Dropzone from '../../../../../components/contents/dropzone';
import ContentSignIn from '../../component/content-signup';
import { usePictureLogic } from './logic';
export default function OrganizationPicturePage() {
  // Attributes
  const { handleOnContinue, handleOnLater } = usePictureLogic();
  const [picturePath, setPicturePath] = useState<string>('');
  // Render
  return (
    <Page bgImage='/assets/images/LoginBackground.jpg'>
      <ContentSignIn
        title='Select a picture that represents your organization'
        handleOnContinue={handleOnContinue}
        handleOnLater={handleOnLater}
        isLater={true}
        w='438px'
      >
        {picturePath !== '' ? (
          <HStack
            w='6.25rem'
            h='6.25rem'
            maxH='6.25rem'
            maxW='6.25rem'
            position={'relative'}
          >
            <ButtonIcon
              position={'absolute'}
              top='-0.4375rem'
              right='-17px'
              aria-label=''
              borderRadius='100%'
              size={ButtonSize.XS}
              backgroundColor={COLORS.White.T500.value}
              hoverBackgroundColor={COLORS.Tag.value}
              handleOnClick={() => {
                setPicturePath('');
              }}
            >
              <Icon
                name='removeSmall'
                stroke={COLORS.Error.T500.value}
                width={20}
                height={20}
              />
            </ButtonIcon>
            <Image
              borderRadius='1rem'
              w='100px'
              h='6.25rem'
              minH='6.25rem'
              minW='6.25rem'
              color={COLORS.InputText.value}
              whiteSpace='pre-line'
              src={picturePath}
              alt='Organization picture'
            />
          </HStack>
        ) : (
          <Dropzone onDrag={setPicturePath} />
        )}
      </ContentSignIn>
    </Page>
  );
}
