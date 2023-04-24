import React from 'react';
import COLORS from '../../../../../constants/colors';
import { Box, HStack, Image } from '@chakra-ui/react';
import Page from '../../../../../components/contents/page';
import Icon from '../../../../../components/contents/icon';
import ButtonIcon from '../../../../../components/inputs/button-icon';
import { ButtonSize } from '../../../../../components/inputs/button-icon/types';
import ContentSignIn from '../../component/content-signup';
import { usePictureLogic } from './logic';
import Dropzone from './component/dropzone';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../i18n/keys';
import Button from '../../../../../components/inputs/button';
import FONTS from '../../../../../constants/fonts';

const OrganisationPicturePage = () => {
    // Attributes
    const {
        handleOnContinue,
        handleOnLater,
        picturePath,
        onDrag,
        onDeletePicture,
    } = usePictureLogic();
    const { t } = useTranslation();

    // Render
    return (
        <Page bgImage='/assets/images/AuthSignInBackground.png'>
            <HStack h='full' justifyContent='center' ml='8.5rem'>
                <ContentSignIn
                    title={t<string>(
                        tKeys.auth.sign_up.organisation.picture.title,
                    )}
                    handleOnContinue={() => handleOnContinue('')}
                    handleOnLater={handleOnLater}
                    isLater={true}
                    w='27.375rem'
                >
                    {picturePath ? (
                        <HStack
                            w='6.25rem'
                            h='6.25rem'
                            minH='6.25rem'
                            minW='6.25rem'
                            position={'relative'}
                            spacing='0rem'
                        >
                            <ButtonIcon
                                position={'absolute'}
                                top='-0.4375rem'
                                right='-0.5625rem'
                                aria-label='remove'
                                borderRadius='100%'
                                size={ButtonSize.XS}
                                backgroundColor={COLORS.White.T500.value}
                                hoverBackgroundColor={COLORS.Tag.value}
                                handleOnClick={onDeletePicture}
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
                                w='6.25rem'
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
                        <Dropzone onDrag={onDrag}>
                            <Button
                                border={`0.125rem dashed ${COLORS.InputText.value}`}
                                font={FONTS.T1.T12px.Medium500.value}
                                borderRadius='1rem'
                                w='6.25rem'
                                h='6.25rem'
                                minH='6.25rem'
                                minW='6.25rem'
                                direction='column'
                                backgroundColor='transparent'
                                color={COLORS.InputText.value}
                                whiteSpace='pre-line'
                                spacing='7px'
                                marginInlineStart={'0 !important'}
                                startEnhancer={(): React.ReactElement => (
                                    <Icon
                                        name='uploadCloud'
                                        stroke={COLORS.InputText.value}
                                        width='24'
                                        height='24'
                                    />
                                )}
                            >
                                {t<string>(
                                    tKeys.auth.sign_up.organisation.form.picture
                                        .label,
                                )}
                            </Button>
                        </Dropzone>
                    )}
                </ContentSignIn>
            </HStack>
        </Page>
    );
};

export default OrganisationPicturePage;
