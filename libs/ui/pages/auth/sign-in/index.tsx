import React, { useState, cloneElement } from 'react';
import COLORS from '../../../../../libs/ui/constants/colors';
import { HStack, Image, Input as ChakraInput, VStack } from '@chakra-ui/react';
import FONTS from '../../../../../libs/ui/constants/fonts';
import Page from '../../../components/contents/page';
import Text from '../../../components/contents/text';
import Input from '../../../components/inputs/input';
import { useRouter } from 'next/router';
import Button from '../../../components/inputs/button';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { SignUpStep } from './types';
import Icon from '../../../components/contents/icon';
import InputSelectAndInput from '../../../components/inputs/input-text-select';
import ButtonIcon from '../../../components/inputs/button-icon';
import { ButtonSize } from '../../../components/inputs/button-icon/types';
import Yup, { array, string } from 'yup';
import Dropzone from '../../../components/contents/dropzone';
import { TeammatesOption } from '../../../components/contents/teammates/props';
import Teammates from '../../../components/contents/teammates';
export default function SignInPage() {
    // Attributes
    const { push } = useRouter();
    const [path, setPath] = useState<string>('');

    const [currentStep, setCurrentStep] = useState<SignUpStep>(
        SignUpStep.DEFAULT,
    );
    const [teammates, setTeammates] = useState<TeammatesOption[]>([]);

    // Formik
    const { values, dirty, setFieldError, ...rest } = useFormik({
        initialValues: {
            email: '',
            password: '',
            organizationName: '',
            teammates: Array<string>,
        },
        onSubmit: () => {},
    });
    const form = createForm(values, rest);

    // Functions
    function filtreArray(key) {
        setTeammates((prev) => prev.filter((obj) => obj.id != key));
    }
    function addTeammates() {
        setTeammates((prev) => [
            ...prev,
            {
                id: teammates.length,
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
                            ...form.teammates,
                            name: `teammates.${teammates.length}`,
                            value: undefined,
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
                        onDelete={() => filtreArray(teammates.length)}
                        key={teammates.length}
                    />
                ),
            },
        ]);
    }
    const handleOnSubmit = async (): Promise<void> => {};

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
                            color={COLORS.Text.T400.value}
                        />
                    </>
                );
            case SignUpStep.ORGANIZATION_PICTURE:
                return (
                    <>
                        {path !== '' ? (
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
                                        setPath('');
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
                                    src={path}
                                    alt='Organization picture'
                                />
                            </HStack>
                        ) : (
                            <Dropzone onDrag={setPath} />
                        )}
                    </>
                );
            case SignUpStep.INVITE_TEAM_MEMBERS:
                return (
                    <Teammates
                        values={teammates}
                        onClick={addTeammates}
                        buttonChildren={'Add Member'}
                    />
                );
        }
    };
    // Render
    return (
        <Page bgImage='/assets/images/LoginBackground.jpg'>
            <VStack
                spacing='40px'
                position='absolute'
                left='136px'
                w='358px'
                alignItems={'left'}
                justifyContent={'left'}
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
