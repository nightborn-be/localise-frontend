import React, { useState } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import Button from '../../../../../../../../../components/inputs/button/index';
import COLORS from '../../../../../../../../../constants/colors';
import FONTS from '../../../../../../../../../constants/fonts';
import Input from '../../../../../../../../../components/inputs/input';
import { IEditInputProps } from './props';
import { useEditInputLogic } from './logic';

const EditInput = ({
    translation,
    updateTranslationsForm,
}: IEditInputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const { form } = useEditInputLogic({ translation });
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
                placeholder='Insert traduction'
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
