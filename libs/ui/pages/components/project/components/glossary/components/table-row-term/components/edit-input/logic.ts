import { useFormik } from 'formik';
import { IEditInputLogicProps } from './props';
import { EditInputLogicType, IEditInputForm } from './types';
import { createForm } from 'utils/formik';
import { useState } from 'react';

export const useEditInputLogic = ({
    translation,
}: IEditInputLogicProps): EditInputLogicType => {
    // Attributes
    const [isFocused, setIsFocused] = useState<boolean>(false);
    // Formik
    const { values, ...rest } = useFormik<IEditInputForm>({
        initialValues: {
            translation: translation.translation as string,
            termId: translation.termId as string,
            languageId: translation.languageId as string,
        },
        onSubmit: () => {},
        validateOnChange: false,
    });

    const form = createForm(values, rest);

    // Functions
    return { form, isFocused, setIsFocused };
};
