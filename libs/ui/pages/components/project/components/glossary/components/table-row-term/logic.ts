import { useFormik } from "formik";
import { createForm } from "utils/formik";
import { ITableRowTermLogicProps } from "./props";
import { ITableRowTermForm, TableRowTermLogicType } from "./types";
import { IEditInputForm } from "./components/edit-input/types";
import { useGetTranslations } from "gateways/resource-api/translations/translations";

export const useTableRowTermLogic =
    ({ term }: ITableRowTermLogicProps): TableRowTermLogicType => {
        // Attributes
        const { data: translations, refetch: refetchTranslations } = useGetTranslations(term.id as string);
        // Formik
        const { values, ...rest } = useFormik<ITableRowTermForm>({
            initialValues: {
                projectId: term.projectId as string,
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
        return { form, updateTranslationsForm, translations };
    };
