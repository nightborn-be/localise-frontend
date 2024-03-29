import React from 'react';
import Page from '../../components/contents/page';
import Text from '../../components/contents/text';
import COLORS from '../../constants/colors';
import FONTS from '../../constants/fonts';
import Button from '../../components/inputs/button';
import { HStack, Image, Link, VStack } from '@chakra-ui/react';
import { useAuthHomeLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../i18n/keys';
import { IAuthHomePageProps } from './props';

export default function AuthHomePage({ redirectUrl }: IAuthHomePageProps) {
    // Attributes
    const { handleSignInRedirection, handleSignUpRedirection } =
        useAuthHomeLogic({ redirectUrl });
    const { t } = useTranslation();

    // Render
    return (
        <Page bgImage='./assets/images/AuthHomeBackground.png'>
            <VStack
                h='full'
                spacing='1.25rem'
                padding='0'
                alignItems={'left'}
                justifyContent={'center'}
                ml='12.5rem'
            >
                <VStack spacing={'0'} alignItems='left'>
                    <Text
                        font={FONTS.T1.T28px.SemiBold600.value}
                        color={COLORS.Text.T400.value}
                    >
                        {t<string>(tKeys.auth.home.title)}
                    </Text>
                    <VStack spacing='0.75rem' alignItems={'left'}>
                        <HStack spacing={0}>
                            {/* Change the font size to 64px when Thomas regenerate the value */}
                            <Text
                                font={FONTS.T1.T60px.Bold700.value}
                                color={COLORS.Text.T400.value}
                                my='0'
                            >
                                {t<string>(tKeys.auth.home.project_name)}
                            </Text>
                            <Image
                                w={'3.75rem'}
                                h={'3.75rem'}
                                src='./assets/images/handHome.png'
                                alt='Hand emoji'
                            />
                        </HStack>
                        <HStack spacing='0.375rem'>
                            <Text
                                font={FONTS.T1.T16px.Light300.value}
                                color={COLORS.Text.T400.value}
                                my='0'
                            >
                                {t<string>(tKeys.auth.home.subtitle)}
                            </Text>
                            <Image
                                w={'1.5rem'}
                                h={'1.5rem'}
                                src='./assets/images/nightborn.png'
                                alt='Nightborn logo'
                            />
                        </HStack>
                    </VStack>
                </VStack>
                <VStack spacing='0.75rem' alignItems={'left'}>
                    <Button
                        color={COLORS.White.T500.value}
                        backgroundColor={COLORS.Localize.Purple.T500.value}
                        w={'17.1875rem'}
                        h={'2.75rem'}
                        border='0.0625rem solid transparent'
                        borderRadius={'0.5rem'}
                        hoverBackgroundColor={COLORS.Localize.Purple.T600.value}
                        onClick={handleSignInRedirection}
                    >
                        {t<string>(tKeys.auth.home.cta.sign_in)}
                    </Button>
                    <Button
                        color={COLORS.Localize.Purple.T500.value}
                        backgroundColor={COLORS.BG.value}
                        hoverBackgroundColor={COLORS.Communication.BG.value}
                        border={`0.0625rem solid ${COLORS.Localize.Purple.T500.value}`}
                        w={'17.1875rem'}
                        h={'2.75rem'}
                        borderRadius={'0.5rem'}
                        onClick={handleSignUpRedirection}
                    >
                        {t<string>(tKeys.auth.home.cta.sign_up)}
                    </Button>
                </VStack>
                <HStack
                    spacing='0.75rem'
                    justifyContent={'center'}
                    alignItems={'right'}
                >
                    <Text
                        color={COLORS.Text.T400.value}
                        font={FONTS.T1.T16px.SemiBold600.value}
                    >
                        Looking for the old Localize ?
                        <Link
                            marginLeft={'0.3125rem'}
                            variant={'unstyled'}
                            href='https://legacy.localize.nightborn.com'
                            color={COLORS.Localize.Purple.T500.value}
                        >
                            Click here
                        </Link>
                    </Text>
                </HStack>
            </VStack>
        </Page>
    );
}
