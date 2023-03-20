import React, { useState } from 'react';
import COLORS from '../../../../../libs/ui/constants/colors';
import { VStack } from '@chakra-ui/react';
import FONTS from '../../../../../libs/ui/constants/fonts';
import Page from '../../../components/contents/page';
import Text from '../../../components/contents/text';
import Input from '../../../components/inputs/input';
import { useRouter } from 'next/router';
import Button from '../../../components/inputs/button';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { SignUpStep } from './types';
export default function SignInPage() {
    const { push } = useRouter();
    const [currentStep, setCurrentStep] = useState<SignUpStep>(
        SignUpStep.DEFAULT,
    );
    const handleOnSubmit = async (): Promise<void> => {
        // if (dirty) {
        //     const response = await TokenService.post(
        //         form?.email?.value,
        //         form?.password?.value,
        //     );
        // }
        // If you have a response it means that the user is recognized by the system
        // if (response) {
        // 	const { access_token } = response;
        // 	// The new access_token will be store in the localStorage (from navigator)
        // 	localStorage.setItem('ACCESS_TOKEN', access_token);
        // 	push('/company');
        // } else {
        // 	const errorMsg = 'Wrong credentials';
        // 	errors.push(errorMsg);
        // 	setFieldError('email', errorMsg);
        // }
    };

    //Formik
    const { values, dirty, setFieldError, ...rest } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: () => {},
    });
    const handleOnContinue = () => {
        if (currentStep === SignUpStep.DEFAULT)
            setCurrentStep(SignUpStep.ORGANIZATION_NAME);
        else if (currentStep === SignUpStep.ORGANIZATION_NAME)
            setCurrentStep(SignUpStep.ORGANIZATION_PICTURE);
        else if (currentStep === SignUpStep.ORGANIZATION_PICTURE)
            setCurrentStep(SignUpStep.INVITE_TEAM_MEMBERS);
        else return push('/auth/');
    };
    const renderTitle = (): string => {
        switch (currentStep) {
            case SignUpStep.DEFAULT:
                return 'Tell us more about yourself';
            case SignUpStep.ORGANIZATION_NAME:
                return 'What is your organization name?';
            case SignUpStep.ORGANIZATION_PICTURE:
                return 'Select a picture that represents your organization';
            case SignUpStep.INVITE_TEAM_MEMBERS:
                return 'Invite your teammates';
        }
    };

    const renderForm = () => {
        switch (currentStep) {
            case SignUpStep.DEFAULT:
                return (
                    <>
                        <Input
                            {...form.email}
                            w='327px'
                            padding='12px'
                            gap='8px'
                            label='Email'
                            placeholder='Insert email'
                            placeholderColor={COLORS.InputText.value}
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
                        />
                    </>
                );
            case SignUpStep.ORGANIZATION_NAME:
                return;
            case SignUpStep.ORGANIZATION_PICTURE:
                return;
            case SignUpStep.INVITE_TEAM_MEMBERS:
                return;
        }
    };
    const form = createForm(values, rest);
    return (
        <Page bgImage='/assets/images/LoginBackground.png'>
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
                    {renderTitle()}
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
                    />
                </VStack>
                <Button
                    color={COLORS.White.T500.value}
                    backgroundColor={COLORS.Localize.Purple.T500.value}
                    border='1px solid transparent'
                    borderRadius={'8px'}
                    hoverBackgroundColor={COLORS.Localize.Purple.T600.value}
                    onClick={handleOnContinue}
                >
                    Continue
                </Button>
            </VStack>
        </Page>
    );
}
