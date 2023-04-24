import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../../../../../../constants/colors';
import FONTS from '../../../../../../../../constants/fonts';
import Text from '../../../../../../text';
import ButtonIcon from '../../../../../../../inputs/button-icon';
import Icon from '../../../../../../icon';
import { ButtonSize } from '../../../../../../../inputs/button-icon/types';
import Input from 'ui/components/inputs/input';
import InputTextAreaField from '../../../../../../../inputs/input-textarea-field';
import EditInput from '../edit-input';
import { ITermEditContentProps } from './props';
import Button from '../../../../../../../inputs/button';
import { tKeys } from '../../../../../../../../../i18n/keys';
import { useTranslation } from 'react-i18next';

export const TermEditContent = ({
    isOpen,
    translations,
    form,
    handleOnSaveTranslations,
    updateTranslationsForm,
    handleOnDeleteTerm,
    clearNewRowTerm,
    toggleIsOpen,
}: ITermEditContentProps) => {
    // Attributes
    const { t } = useTranslation();
    // Render
    return (
        <VStack
            display={isOpen ? 'visible' : 'none'}
            alignItems={'left'}
            justifyContent={'left'}
            w='full'
            h='full'
            spacing={0}
            bg={COLORS.BG.value}
            borderLeft={`0.0625rem solid ${COLORS.Line.value}`}
            borderBottom={`0.0625rem solid ${COLORS.Line.value}`}
            borderRight={`0.0625rem solid ${COLORS.Line.value}`}
            borderBottomLeftRadius={'0.5rem'}
            borderBottomRightRadius={'0.5rem'}
        >
            <HStack padding='0.75rem 0.75rem 0.25rem'>
                <Input
                    {...form.key}
                    placeholder={t<string>(
                        tKeys.home.project.tab.glossary.content.table.content
                            .row.input.key.placeholder,
                    )}
                    color={COLORS.Text.T400.value}
                    border='0.0625rem solid transparent'
                    padding='0.5rem'
                    gap='0.75rem'
                    w='37.5rem'
                    h='1.875rem'
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
                                {t<string>(
                                    tKeys.home.project.tab.glossary.content
                                        .table.content.row.input.key.submit,
                                )}
                            </Text>
                        </>
                    }
                />
                <HStack
                    w='full'
                    alignItems='right'
                    justifyContent={'right'}
                    padding='0.75rem 0.75rem 0.25rem'
                    spacing='0.5rem'
                >
                    <Button
                        h={'1.75rem'}
                        maxH={'1.75rem'}
                        minH={'1.75rem'}
                        w={'fit-content'}
                        borderRadius='0.5rem'
                        color={COLORS.White.T500.value}
                        font={FONTS.T1.T12px.SemiBold600.value}
                        bg={COLORS.Text.T500.value}
                        padding='0.25rem 0.75rem 0.25rem 0.75rem'
                        onClick={() => {
                            handleOnSaveTranslations(form);
                            clearNewRowTerm();
                            toggleIsOpen();
                        }}
                    >
                        {t<string>(
                            tKeys.home.project.tab.glossary.content.table
                                .content.row.cta.save,
                        )}
                    </Button>
                    <ButtonIcon
                        backgroundColor='#F46363'
                        size={ButtonSize.XS}
                        hoverBackgroundColor='#E55252'
                        borderRadius='0.5rem'
                        padding='0.25rem'
                        gap='0.625rem'
                        handleOnClick={() => {
                            handleOnDeleteTerm(form.termId.value);
                        }}
                    >
                        <Icon name='trashSmall' stroke='none' fill='#FFFFFF' />
                    </ButtonIcon>
                </HStack>
            </HStack>
            <HStack padding='0rem 0.75rem 0.75rem' top='0rem'>
                <InputTextAreaField
                    {...form.description}
                    color={COLORS.Text.T400.value}
                    border='0.0625rem solid transparent'
                    gap='0.625rem'
                    w='38.0625rem'
                    h='3.125rem'
                    font={FONTS.T1.T12px.Regular400.value}
                    placeholder={t<string>(
                        tKeys.home.project.tab.glossary.content.table.content
                            .row.input.description.placeholder,
                    )}
                    paddingRight='3.125rem'
                    hoverBorder={`0.0625rem solid ${COLORS.Stroke.value}`}
                    rightElement={
                        <>
                            <Icon name='enter' />
                            <Text
                                ml={'0.125rem'}
                                color={COLORS.InputText.value}
                                lineHeight={'0.75rem'}
                                font={FONTS.T1.T10px.SemiBold600.value}
                            >
                                {t<string>(
                                    tKeys.home.project.tab.glossary.content
                                        .table.content.row.input.description
                                        .submit,
                                )}
                            </Text>
                        </>
                    }
                />
            </HStack>

            <VStack
                w='full'
                spacing={'0.625rem'}
                padding='0.25rem 1.25rem 1.25rem'
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
