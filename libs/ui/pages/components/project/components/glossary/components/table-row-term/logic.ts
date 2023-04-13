import { useFormik } from "formik";
import { createForm } from "utils/formik";
import { ITableRowTermLogicProps } from "./props";
import { ITableRowTermForm, TableRowTermLogicType } from "./types";
import { IEditInputForm } from "./components/edit-input/types";
import { useGetTranslations } from "gateways/resource-api/translations/translations";
import { useState } from "react";

export const useTableRowTermLogic =
    ({ term, activeProject }: ITableRowTermLogicProps): TableRowTermLogicType => {
        // Attributes
        const { data: translations, refetch: refetchTranslations } = useGetTranslations(term.id as string);
        const [isOpen, setIsOpen] = useState<boolean>(false);
        // Formik
        const { values, ...rest } = useFormik<ITableRowTermForm>({
            initialValues: {
                projectId: activeProject?.id as string,
                termId: term.id as string,
                key: term.name as string,
                description: term.description as string,
                translations: [],
            },
            onSubmit: () => { },
            validateOnChange: false,
        });

        const form = createForm(values, rest);
        function updateTranslationsForm(value: IEditInputForm) {
            rest.setFieldValue('translations', [...form.translations.value, value])
        }
        // Functions
        function toggleIsOpen() {
            setIsOpen((prev) => !prev);
        }
        function targetLanguagesToDisplayValue(): string {
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
        return { form, updateTranslationsForm, translations, isOpen, setIsOpen, targetLanguagesToDisplayValue, getSourceLanguage, toggleIsOpen };
    };
