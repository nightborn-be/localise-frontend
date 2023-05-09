import React from 'react';
import { Badge, HStack, VStack } from '@chakra-ui/react';
import { ITableRowTermProps } from './props';
import ButtonIcon from '../../../../../inputs/button-icon';
import { ButtonSize } from '../../../../../inputs/button-icon/types';
import COLORS from '../../../../../../constants/colors';
import FONTS from '../../../../../../constants/fonts';
import Text from '../../../../text';
import Input from '../../../../../inputs/input';
import Icon from '../../../../icon';
import TermEditContent from './components/term-edit-content';
import { useTableRowTermLogic } from './logic';
import { tKeys } from '../../../../../../../i18n/keys';
import { useTranslation } from 'react-i18next';
import Tooltip from '../../../../tooltip';
import { TooltipType } from '../../../../tooltip/props';

export default function TableRowTerm({
    term,
    projectLanguages,
    handleOnSaveTranslations,
    handleOnDeleteTerm,
    isDisabled,
    isNewTerm = false,
    isLoadingCreateTerm,
    isLoadingUpdateTerm,
    isLoadingDeleteTerm,
    ref,
}: ITableRowTermProps) {
    //Attributes
    const {
        form,
        updateTranslationsForm,
        translations,
        toggleIsOpen,
        isOpen,
        getSourceLanguage,
        targetLanguagesToDisplayValue,
    } = useTableRowTermLogic({ term, languages: projectLanguages, isNewTerm });
    const { t } = useTranslation();

    //Render
    return (
        <VStack w='full' spacing={0}>
            <HStack
                w='full'
                h={'2.75rem'}
                alignItems='center'
                border={`0.0625rem solid ${COLORS.Line.value}`}
                borderRadius={!isOpen ? '0.5rem' : '0rem'}
                borderTopLeftRadius={'0.5rem'}
                borderTopRightRadius={'0.5rem'}
                spacing={0}
                onClick={isNewTerm ? () => {} : toggleIsOpen}
                cursor={isNewTerm ? 'auto' : 'pointer'}
                ref={ref}
            >
                <HStack
                    padding='0.5rem 1.25rem'
                    spacing='0.625rem'
                    w='full'
                    h='2.75rem'
                    alignItems={'center'}
                    justifyContent={'left'}
                >
                    <Input
                        {...form.key}
                        isDisabled={isDisabled}
                        placeholder={t<string>(
                            tKeys.home.project.tab.glossary.content.table
                                .content.row.input.key.placeholder,
                        )}
                        border='transparent'
                        w={'fit-content'}
                        color={COLORS.Text.T400.value}
                        font={FONTS.T1.T12px.Regular400.value}
                    />
                </HStack>
                <HStack
                    padding='0.5rem 1.25rem'
                    spacing='0.625rem'
                    w='full'
                    h='2.75rem'
                    alignItems={'center'}
                >
                    <Text
                        font={FONTS.T1.T12px.Regular400.value}
                        color={COLORS.Text.T400.value}
                    >
                        {getSourceLanguage()}
                    </Text>
                </HStack>
                <HStack
                    padding='0.5rem 1.25rem'
                    spacing='0.625rem'
                    w='full'
                    h='2.75rem'
                    alignItems={'center'}
                >
                    <Text
                        font={FONTS.T1.T12px.Regular400.value}
                        color={COLORS.Text.T400.value}
                    >
                        {targetLanguagesToDisplayValue()}
                    </Text>
                </HStack>
                <HStack
                    padding='0.5rem 1.25rem'
                    spacing='0.25rem'
                    w='full'
                    h='2.75rem'
                    alignItems={'center'}
                    justifyContent={'right'}
                >
                    {isNewTerm && (
                        <Badge
                            mr='0.625rem'
                            p={'0.25rem'}
                            pr='0.625rem'
                            pl='0.625rem'
                            borderRadius='0.5rem'
                            colorScheme='purple'
                            fontSize={'0.625rem'}
                        >
                            {t<string>(
                                tKeys.home.project.tab.glossary.content.table
                                    .content.row.badge.unsaved,
                            )}
                        </Badge>
                    )}
                    <Tooltip
                        type={TooltipType.DEFAULT}
                        label={t<string>(
                            tKeys.home.project.tab.glossary.content.table.row
                                .expand.tooltip,
                        )}
                        placement={'bottom'}
                    >
                        <ButtonIcon
                            aria-label=''
                            borderRadius='0.375rem'
                            size={ButtonSize.SMALL}
                            padding='0.25rem'
                            gap='0.625rem'
                            backgroundColor={COLORS.White.T500.value}
                            hoverBackgroundColor={COLORS.Stroke.value}
                        >
                            <Icon
                                pointerEvents='none'
                                name={'expand'}
                                fill={COLORS.InputText.value}
                            />
                        </ButtonIcon>
                    </Tooltip>
                    <ButtonIcon
                        aria-label=''
                        borderRadius='0.375rem'
                        size={ButtonSize.SMALL}
                        padding='0.25rem'
                        gap='0.625rem'
                        backgroundColor={COLORS.White.T500.value}
                        hoverBackgroundColor={COLORS.Stroke.value}
                        handleOnClick={isNewTerm ? toggleIsOpen : () => {}}
                    >
                        <Icon
                            pointerEvents='none'
                            name={isOpen ? 'arrowUp' : 'arrowDown'}
                            fill={COLORS.InputText.value}
                        />
                    </ButtonIcon>
                </HStack>
            </HStack>
            <TermEditContent
                isOpen={isOpen}
                translations={translations}
                projectLanguages={
                    translations === undefined ? projectLanguages : undefined
                }
                form={form}
                handleOnSaveTranslations={handleOnSaveTranslations}
                updateTranslationsForm={updateTranslationsForm}
                handleOnDeleteTerm={handleOnDeleteTerm}
                toggleIsOpen={toggleIsOpen}
                isLoadingCreateTerm={isLoadingCreateTerm}
                isLoadingUpdateTerm={isLoadingUpdateTerm}
                isLoadingDeleteTerm={isLoadingDeleteTerm}
            />
        </VStack>
    );
}
