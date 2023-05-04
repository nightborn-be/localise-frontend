import { useFormik } from 'formik';
import { createForm } from 'utils/formik';
import { ITableRowTermLogicProps } from './props';
import { ITableRowTermForm, TableRowTermLogicType } from './types';
import { IEditInputForm } from './components/edit-input/types';
import { useGetTranslations } from 'gateways/resource-api/translations/translations';
import { useEffect, useState } from 'react';

export const useTableRowTermLogic = ({
    term,
    languages,
    isNewTerm,
}: ITableRowTermLogicProps): TableRowTermLogicType => {
    // Attributes
    const { data: translations, refetch: refetchTranslations } =
        useGetTranslations(
            term.id as string,
            {},
            { query: { enabled: !isNewTerm } },
        );
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // Formik
    const { values, ...rest } = useFormik<ITableRowTermForm>({
        initialValues: {
            termId: term.id as string,
            key: term.name as string,
            description: term.description as string,
            translations: [],
            isNewTerm: isNewTerm,
        },
        onSubmit: () => {},
        validateOnChange: false,
    });

    const form = createForm(values, rest);
    function updateTranslationsForm(value: IEditInputForm) {
        rest.setFieldValue('translations', [...form.translations.value, value]);
    }
    // Functions
    function toggleIsOpen() {
        setIsOpen((prev) => !prev);
    }
    function targetLanguagesToDisplayValue(): string {
        let value = '';
        languages?.data?.forEach((language) => {
            if (!language.isSource) {
                value += language.abbreviation?.toUpperCase() + ' / ';
            }
        });

        return value.slice(0, -3);
    }

    function getSourceLanguage(): string {
        let value = '';
        languages?.data?.forEach((language) => {
            if (language.isSource && language.abbreviation) {
                value = language.abbreviation?.toUpperCase();
            }
        });
        return value;
    }
    return {
        form,
        updateTranslationsForm,
        translations,
        isOpen,
        setIsOpen,
        targetLanguagesToDisplayValue,
        getSourceLanguage,
        toggleIsOpen,
    };
};
