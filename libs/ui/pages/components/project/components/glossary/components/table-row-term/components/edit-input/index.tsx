import React from 'react';
import { HStack } from '@chakra-ui/react';
import Button from '../../../../../../../../../components/inputs/button/index';
import COLORS from '../../../../../../../../../constants/colors';
import FONTS from '../../../../../../../../../constants/fonts';
import Input from '../../../../../../../../../components/inputs/input';
import { IEditInputProps } from './props';
import { useEditInputLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../../../../i18n/keys';

const EditInput = ({
    translation,
    updateTranslationsForm,
}: IEditInputProps) => {
    // Attributes
    const { form, isFocused, setIsFocused } = useEditInputLogic({
        translation,
    });
    const { t } = useTranslation();

    // Render
    return (
        <HStack w='full'>
            <Button
                pointerEvents={'none'}
                w='40px'
                h='40px'
                border={isFocused ? 'none' : `1px solid ${COLORS.Line.value}`}
                backgroundColor={
                    isFocused
                        ? COLORS.Localize.Purple.T500.value
                        : COLORS.White.T500.value
                }
                color={
                    isFocused ? COLORS.White.T500.value : COLORS.Text.T400.value
                }
                font={FONTS.T1.T14px.SemiBold600.value}
            >
                {translation.language.abbreviation?.toUpperCase()}
            </Button>
            <Input
                {...form.translation}
                placeholder={t<string>(
                    tKeys.home.project.tab.glossary.content.table.content.row
                        .input.traduction.placeholder,
                )}
                h='40px'
                w='full'
                padding='12px'
                bg={COLORS.White.T500.value}
                color={COLORS.Text.T500.value}
                font={FONTS.T1.T12px.Regular400.value}
                placeholderColor={COLORS.InputText.value}
                border={`1px solid ${COLORS.Line.value}`}
                borderRadius='8px'
                onFocus={() => {
                    setIsFocused(true);
                }}
                onBlur={() => {
                    updateTranslationsForm({
                        termId: form.termId.value,
                        languageId: form.languageId.value,
                        translation: form.translation.value,
                    });
                    setIsFocused(false);
                }}
            />
        </HStack>
    );
};

export default EditInput;
