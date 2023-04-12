import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../../../../../../../constants/colors';
import FONTS from '../../../../../../../../../constants/fonts';
import Text from '../../../../../../../../../components/contents/text';
import ButtonIcon from '../../../../../../../../../components/inputs/button-icon';
import Icon from '../../../../../../../../../components/contents/icon';
import { ButtonSize } from '../../../../../../../../../components/inputs/button-icon/types';
import Input from 'ui/components/inputs/input';
import InputTextAreaField from '../../../../../../../../../components/inputs/input-textarea-field';
import EditInput from '../edit-input';
import { ITermEditContentProps } from './props';
import Button from '../../../../../../../../../components/inputs/button';

export const TermEditContent = ({
    isOpen,
    translations,
    form,
    handleOnSaveTranslations,
    updateTranslationsForm,
    handleOnDeleteTerm,
    clearNewRowTerm,
}: ITermEditContentProps) => {
    return (
        <VStack
            display={isOpen ? 'visible' : 'none'}
            alignItems={'left'}
            justifyContent={'left'}
            w='full'
            h='full'
            spacing={0}
            bg={COLORS.BG.value}
            borderLeft={`1px solid ${COLORS.Line.value}`}
            borderBottom={`1px solid ${COLORS.Line.value}`}
            borderRight={`1px solid ${COLORS.Line.value}`}
            borderBottomLeftRadius={'8px'}
            borderBottomRightRadius={'8px'}
        >
            <HStack padding='12px 12px 4px'>
                <Input
                    {...form.key}
                    placeholder={'Insert key'}
                    color={COLORS.Text.T400.value}
                    border='0.0625rem solid transparent'
                    padding='0.5rem'
                    gap='0.75rem'
                    w='600px'
                    h='18px'
                    font={FONTS.T1.T14px.SemiBold600.value}
                    paddingRight='3.125rem'
                    focusBorderColor={`${COLORS.Stroke.value}`}
                    hoverBorder={`0.0625rem solid ${COLORS.Stroke.value}`}
                    rightElementMarginRight='0.5rem'
                    rightElement={
                        <>
                            <Icon name='enter' />
                            <Text
                                ml={'0.125rem'}
                                color={COLORS.InputText.value}
                                lineHeight={'0.75rem'}
                                font={FONTS.T1.T10px.SemiBold600.value}
                            >
                                Enter
                            </Text>
                        </>
                    }
                />
                <HStack
                    w='full'
                    alignItems='right'
                    justifyContent={'right'}
                    padding='12px 12px 4px'
                    spacing='8px'
                >
                    <Button
                        h={'28px'}
                        maxH={'28px'}
                        minH={'28px'}
                        w={'fit-content'}
                        borderRadius='8px'
                        color={COLORS.White.T500.value}
                        font={FONTS.T1.T12px.SemiBold600.value}
                        bg={COLORS.Text.T500.value}
                        padding='4px 12px 4px 12px'
                        onClick={() => {
                            handleOnSaveTranslations(form);
                            clearNewRowTerm();
                        }}
                    >
                        Save
                    </Button>
                    <ButtonIcon
                        backgroundColor='#F46363'
                        size={ButtonSize.XS}
                        hoverBackgroundColor='#E55252'
                        padding='0.25rem'
                        gap='0.625rem'
                        handleOnClick={() => {
                            handleOnDeleteTerm(
                                form.projectId.value,
                                form.termId.value,
                            );
                        }}
                    >
                        <Icon name='trashSmall' stroke='none' fill='#FFFFFF' />
                    </ButtonIcon>
                </HStack>
            </HStack>
            <HStack padding='0px 12px 12px' top='0px'>
                <InputTextAreaField
                    {...form.description}
                    color={COLORS.Text.T400.value}
                    border='1px solid transparent'
                    padding='8px'
                    gap='10px'
                    w='609px'
                    h='50px'
                    font={FONTS.T1.T12px.Regular400.value}
                    placeholder='Text'
                    paddingRight='50px'
                    hoverBorder={`1px solid ${COLORS.Stroke.value}`}
                    rightElement={
                        <>
                            <Icon name='enter' />
                            <Text
                                ml={'2px'}
                                color={COLORS.InputText.value}
                                lineHeight={'12px'}
                                font={FONTS.T1.T10px.SemiBold600.value}
                            >
                                Enter
                            </Text>
                        </>
                    }
                />
            </HStack>

            <VStack
                w='full'
                spacing={'10px'}
                padding='4px 20px 20px'
                justifyContent={'center'}
                alignItems={'flex-start'}
            >
                {translations?.data?.map((t) => {
                    return (
                        <EditInput
                            translation={t}
                            updateTranslationsForm={updateTranslationsForm}
                        />
                    );
                })}
            </VStack>
        </VStack>
    );
};

export default TermEditContent;
