import React, { useState, useEffect } from 'react';
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
import { EnhancerProps } from '../../../components/inputs/button/props';
import Icon from '../../../components/contents/icon';
import InputSelectAndInput from '../../../components/inputs/input-text-select';


export type TeammatesOption = {
    id: number;
    content: React.ReactElement;
};
export default function SignInPage() {
    const { push } = useRouter();
    const [currentStep, setCurrentStep] = useState<SignUpStep>(
        SignUpStep.DEFAULT,
    );

    const [countTeammates, setCountTeammates] = useState<number>(0);
    const [teammates, setTeammates] = useState<TeammatesOption[]>([]);

    function addTeammates() {
        // if (countTeammates < 5) setCountTeammates((prev) => prev + 1);
        setTeammates((prev) => [
            ...prev,
            {
                id: countTeammates + 1,
                content: (
                    <InputSelectAndInput
                        selectProps={{
                            color: COLORS.Localize.Purple.T500.value,
                            placeholderColor: COLORS.Localize.Purple.T500.value,
                            dropdownArrowColor:
                                COLORS.Localize.Purple.T500.value,
                            w: '100px',
                            background: COLORS.White.T500.value,
                            border: 'transparent',
                            options: [
                                { value: 'Admin', label: 'Admin' },
                                {
                                    value: 'Member',
                                    label: 'Member',
                                },
                                {
                                    value: 'Utilisateur',
                                    label: 'Utilisateur',
                                },
                                {
                                    value: 'Administrateur',
                                    label: 'Administrateur',
                                },
                            ],
                            fontWeight: '400',
                            dropdownIndicator: (
                                <Icon name='dropdownIndicator' />
                            ),
                            fontSize: '12px',
                            lineHeight: '15px',
                            padding: '0px',
                            gap: '4px',
                            placeholder: 'Admin',
                            paddingRight: '0',
                            paddingLeft: '0',
                        }}
                        inputProps={{
                            ...form.email,
                            placeholder: 'Insert email',
                            w: '100%',
                            border: 'transparent',
                            font: FONTS.T1.T12px.Regular400.value,
                            zIndex: '10',
                        }}
                        w='327px'
                        h='40px'
                        border={`1px solid ${COLORS.Line.value}`}
                        borderRadius='8px'
                        backgroundColor={COLORS.White.T500.value}
                        rightIcon={
                            <Icon
                                pointerEvents={'none'}
                                name='removeSmall'
                                stroke={COLORS.InputText.value}
                            />
                        }
                        rightHoverIcon={
                            <Icon
                                pointerEvents={'none'}
                                name='removeSmall'
                                stroke={COLORS.Error.T500.value}
                            />
                        }
                        onDelete={() => {}}
                        key={countTeammates}
                    />
                ),
            },
        ]);
    }
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
            organizationName: '',
            teammates: [''],
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
                    </>
                );
            case SignUpStep.ORGANIZATION_NAME:
                return (
                    <>
                        <Input
                            {...form.organizationName}
                            w='327px'
                            padding='12px'
                            gap='8px'
                            label='Your workspace name'
                            placeholder='Insert name'
                            placeholderColor={COLORS.InputText.value}
                            bg={COLORS.White.T500.value}
                            font={FONTS.T1.T12px.Regular400.value}
                            color={COLORS.InputText.value}
                        />
                    </>
                );
            case SignUpStep.ORGANIZATION_PICTURE:
                return (
                    <Button
                        border={`0.125rem dashed ${COLORS.Line.value}`}
                        font={FONTS.T1.T12px.Medium500.value}
                        borderRadius='1rem'
                        w='6.25rem'
                        h='6.25rem'
                        direction='column'
                        backgroundColor='transparent'
                        color={COLORS.InputText.value}
                        whiteSpace='pre-line'
                        spacing='0.4375rem'
                        startEnhancer={(
                            enhancer: EnhancerProps,
                        ): React.ReactElement => (
                            <Icon
                                name='uploadCloud'
                                stroke={COLORS.InputText.value}
                                width='24'
                                height='24'
                            />
                        )}
                    >
                        Add a picture
                    </Button>
                );
            case SignUpStep.INVITE_TEAM_MEMBERS:
                return (
                    <VStack w='327px' spacing={'12px'}>
                        {/* {Array(countTeammates)
                            .fill(null)
                            .map((obj, index) => (
                                <InputSelectAndInput
                                    selectProps={{
                                        color: COLORS.Localize.Purple.T500
                                            .value,
                                        placeholderColor:
                                            COLORS.Localize.Purple.T500.value,
                                        dropdownArrowColor:
                                            COLORS.Localize.Purple.T500.value,
                                        w: '100px',
                                        background: COLORS.White.T500.value,
                                        border: 'transparent',
                                        options: [
                                            { value: 'Admin', label: 'Admin' },
                                            {
                                                value: 'Member',
                                                label: 'Member',
                                            },
                                            {
                                                value: 'Utilisateur',
                                                label: 'Utilisateur',
                                            },
                                            {
                                                value: 'Administrateur',
                                                label: 'Administrateur',
                                            },
                                        ],
                                        fontWeight: '400',
                                        dropdownIndicator: (
                                            <Icon name='dropdownIndicator' />
                                        ),
                                        fontSize: '12px',
                                        lineHeight: '15px',
                                        padding: '0px',
                                        gap: '4px',
                                        placeholder: 'Admin',
                                        paddingRight: '0',
                                        paddingLeft: '0',
                                    }}
                                    inputProps={{
                                        ...form.email,
                                        placeholder: 'Insert email',
                                        w: '100%',
                                        border: 'transparent',
                                        font: FONTS.T1.T12px.Regular400.value,
                                        zIndex: '10',
                                    }}
                                    w='327px'
                                    h='40px'
                                    border={`1px solid ${COLORS.Line.value}`}
                                    borderRadius='8px'
                                    backgroundColor={COLORS.White.T500.value}
                                    rightIcon={
                                        <Icon
                                            pointerEvents={'none'}
                                            name='removeSmall'
                                            stroke={COLORS.InputText.value}
                                        />
                                    }
                                    rightHoverIcon={
                                        <Icon
                                            pointerEvents={'none'}
                                            name='removeSmall'
                                            stroke={COLORS.Error.T500.value}
                                        />
                                    }
                                    onDelete={() => {}}
                                    key={index}
                                />
                            ))} */}
                        <>
                            {teammates.map((obj) => obj.content)}
                            {countTeammates < 5 && (
                                <Button
                                    border={`1px dashed ${COLORS.Line.value}`}
                                    borderRadius='8px'
                                    w='327px'
                                    h='40px'
                                    padding='4px 12px 4px 8px'
                                    gap='4px'
                                    font={FONTS.T1.T14px.Regular400.value}
                                    justifyContent='flex-start'
                                    backgroundColor='transparent'
                                    color={COLORS.InputText.value}
                                    hoverColor={
                                        COLORS.Localize.Purple.T500.value
                                    }
                                    startEnhancer={(
                                        enhancer: EnhancerProps,
                                    ): React.ReactElement => (
                                        <Icon
                                            name='add'
                                            stroke={
                                                enhancer.isHovered
                                                    ? COLORS.Localize.Purple
                                                          .T500.value
                                                    : COLORS.InputText.value
                                            }
                                            width='20'
                                            height='20'
                                        />
                                    )}
                                    onClick={addTeammates}
                                >
                                    Add a member
                                </Button>
                            )}
                        </>
                    </VStack>
                );
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
                w='358px'
            >
                <Text
                    font={FONTS.T1.T24px.Bold700.value}
                    color={COLORS.Text.T400.value}
                >
                    {renderTitle()}
                </Text>
                <VStack spacing='20px' alignItems={'left'}>
                    {renderForm()}
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
                    {currentStep === SignUpStep.ORGANIZATION_NAME ||
                        (currentStep === SignUpStep.ORGANIZATION_PICTURE && (
                            <Button
                                color={COLORS.InputText.value}
                                backgroundColor={'transparent'}
                                border='1px solid transparent'
                                borderRadius={'8px'}
                                w='327px'
                                onClick={handleOnContinue}
                            >
                                Later
                            </Button>
                        ))}
                </VStack>
            </VStack>
        </Page>
    );
}
