import React, { useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { ITableRowTermProps } from './props';
import ButtonIcon from '../../../../../../../components/inputs/button-icon';
import { ButtonSize } from '../../../../../../../components/inputs/button-icon/types';
import COLORS from '../../../../../../../constants/colors';
import FONTS from '../../../../../../../constants/fonts';
import Text from '../../../../../../../components/contents/text';
import Input from '../../../../../../../components/inputs/input';
import Icon from '../../../../../../../components/contents/icon';
import TermEditContent from './components/term-edit-content';
import { useTableRowTermLogic } from './logic';

export default function TableRowTerm({
    term,
    handleOnSaveTranslations,
    handleOnDeleteTerm,
    activeProject,
    clearNewRowTerm,
}: ITableRowTermProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { form, updateTranslationsForm, translations } = useTableRowTermLogic(
        { term, activeProject },
    );
    // Functions
    function toggleIsOpen() {
        setIsOpen((prev) => !prev);
    }
    function targetLanguagesToDisplayValue() {
        let value = '';
        translations?.data?.forEach((t) => {
            if (!t.language.isSource) {
                value += t.language.abbreviation?.toUpperCase() + ' / ';
            }
        });

        return value.slice(0, -3);
    }

    function getSourceLanguage(): string {
        let value = '';
        translations?.data?.forEach((t) => {
            if (t.language.isSource && t.language.abbreviation) {
                value = t.language.abbreviation?.toUpperCase();
            }
        });
        return value;
    }
    //Render
    return (
        <VStack w='full' spacing={0}>
            <HStack
                w='full'
                h={'2.75rem'}
                alignItems='flex-start'
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                border={`0.0625rem solid ${COLORS.Line.value}`}
                borderRadius={!isOpen ? '8px' : '0px'}
                borderTopLeftRadius={'8px'}
                borderTopRightRadius={'8px'}
                spacing={0}
            >
                <HStack
                    padding='8px 20px'
                    spacing='10px'
                    w='full'
                    h='44px'
                    alignItems={'center'}
                    justifyContent={'left'}
                >
                    <Input
                        {...form.key}
                        placeholder={'Insert key'}
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
                    padding='8px 20px'
                    spacing='0.25rem'
                    w='full'
                    h='2.75rem'
                    alignItems={'center'}
                    justifyContent={'right'}
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
                    <ButtonIcon
                        aria-label=''
                        borderRadius='0.375rem'
                        size={ButtonSize.SMALL}
                        padding='0.25rem'
                        gap='0.625rem'
                        backgroundColor={COLORS.White.T500.value}
                        hoverBackgroundColor={COLORS.Stroke.value}
                        handleOnClick={toggleIsOpen}
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
                form={form}
                handleOnSaveTranslations={handleOnSaveTranslations}
                clearNewRowTerm={clearNewRowTerm}
                updateTranslationsForm={updateTranslationsForm}
                handleOnDeleteTerm={handleOnDeleteTerm}
            />
        </VStack>
    );
}
