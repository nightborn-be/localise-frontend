import { useFormik } from 'formik';
import { IEditInputLogicProps } from './props';
import { EditInputLogicType, IEditInputForm } from './types';
import { createForm } from 'utils/formik';
import { useState } from 'react';

export const useEditInputLogic = ({
    translation,
    language,
}: IEditInputLogicProps): EditInputLogicType => {
    // Attributes
    // Formik
    const { values, ...rest } = useFormik<IEditInputForm>({
        initialValues: {
            translation: translation
                ? (translation?.translation as string)
                : '',
            termId: translation ? (translation?.termId as string) : '',
            languageId: translation
                ? (translation.languageId as string)
                : (language?.id as string),
        },
        onSubmit: () => {},
        validateOnChange: false,
    });

    const form = createForm(values, rest);

    // Functions
    return { form };
};
