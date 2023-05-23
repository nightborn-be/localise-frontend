import React from 'react';
import { HStack } from '@chakra-ui/react';
import Button from '../../../../../../../inputs/button/index';
import COLORS from '../../../../../../../../constants/colors';
import FONTS from '../../../../../../../../constants/fonts';
import Input from '../../../../../../../inputs/input';
import { IEditInputProps } from './props';
import { useEditInputLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../../../i18n/keys';
import Tooltip from '../../../../../../tooltip';

const EditInput = ({
    translation,
    language,
    updateTranslationsForm,
    datacy,
}: IEditInputProps) => {
    // Attributes
    const { form } = useEditInputLogic({
        translation,
        language,
    });
    const { t } = useTranslation();

    // Functions
    return (
        <HStack w='full'>
            <Tooltip
                label={`${t<string>(
                    tKeys.home.project.tab.glossary.content.table.content.row
                        .input.tooltip,
                )}: ${
                    translation ? translation.language.name : language?.name
                }`}
            >
                <Button
                    pointerEvents={'none'}
                    w='2.5rem'
                    h='2.5rem'
                    border={
                        translation?.language.isSource || language?.isSource
                            ? 'none'
                            : `0.0625rem solid ${COLORS.Line.value}`
                    }
                    backgroundColor={
                        translation?.language.isSource || language?.isSource
                            ? COLORS.Localize.Purple.T500.value
                            : COLORS.White.T500.value
                    }
                    color={
                        translation?.language.isSource || language?.isSource
                            ? COLORS.White.T500.value
                            : COLORS.Text.T400.value
                    }
                    font={FONTS.T1.T14px.SemiBold600.value}
                >
                    {translation?.language.abbreviation?.toUpperCase() ??
                        language?.abbreviation.toUpperCase()}
                </Button>
            </Tooltip>
            <Input
                {...form.translation}
                placeholder={t<string>(
                    tKeys.home.project.tab.glossary.content.table.content.row
                        .input.traduction.placeholder,
                )}
                h='2.5rem'
                w='full'
                padding='0.75rem'
                bg={COLORS.White.T500.value}
                color={COLORS.Text.T500.value}
                font={FONTS.T1.T12px.Regular400.value}
                placeholderColor={COLORS.InputText.value}
                border={`0.0625rem solid ${COLORS.Line.value}`}
                borderRadius='0.5rem'
                onBlur={() => {
                    updateTranslationsForm({
                        termId: form.termId.value,
                        languageId: form.languageId.value,
                        translation: form.translation.value,
                    });
                }}
                data-cy={datacy}
            />
        </HStack>
    );
};

export default EditInput;
