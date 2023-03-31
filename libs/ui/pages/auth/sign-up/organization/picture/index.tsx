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

const OrganisationPicturePage = () => {
    // Attributes
    const {
        handleOnContinue,
        handleOnLater,
        picturePath,
        setPicturePath,
        onDeletePicture,
    } = usePictureLogic();
    const { t } = useTranslation();

    // Render
    return (
        <Page bgImage='/assets/images/LoginBackground.jpg'>
            <Box ml='8.5rem'>
                <ContentSignIn
                    title={t<string>(
                        tKeys.auth.sign_up.organisation.picture.title,
                    )}
                    handleOnContinue={() => handleOnContinue(picturePath)}
                    handleOnLater={handleOnLater}
                    isLater={true}
                    w='27.375rem'
                >
                    {picturePath ? (
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
                                right='-1.0625rem'
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
                        <Dropzone
                            onDrag={setPicturePath}
                            label={t<string>(
                                tKeys.auth.sign_up.organisation.form.picture
                                    .label,
                            )}
                        />
                    )}
                </ContentSignIn>
            </Box>
        </Page>
    );
};

export default OrganisationPicturePage;
