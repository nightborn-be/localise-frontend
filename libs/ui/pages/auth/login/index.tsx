import React from 'react';
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
import * as Yup from 'yup';
export default function LoginPage() {
    const { push } = useRouter();

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
    const schema = Yup.object({
        email: Yup.string().email().required('Email is requried'),
        password: Yup.string().required('Passowrd is requried'),
    });
    //Formik
    const { values, dirty, setFieldError, ...rest } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleOnSubmit,
        validationSchema: schema,
    });
    const form = createForm(values, rest);
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
